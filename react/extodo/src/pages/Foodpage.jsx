import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./Foodpage.css";

const KAKAO_REST_API_KEY = "015b2df51dbff861eb74b93a269bdccd";
const KAKAO_JS_KEY = "870443560a131900b0d7f4368b9ff7f8";
const KAKAO_URL = "https://dapi.kakao.com/v2/local/search/keyword.json";

export default function Foodpage() {
  const [inputLocation, setInputLocation] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [category, setCategory] = useState("");
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const mapRef = useRef(null);
  const mapInstance = useRef(null);
  const markerInstance = useRef(null);
  const infoWindowInstance = useRef(null);

  // 지도 초기화
  useEffect(() => {
    const existingScript = document.querySelector("#kakao-map-sdk");
    if (!existingScript) {
      const script = document.createElement("script");
      script.id = "kakao-map-sdk";
      script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_JS_KEY}&autoload=false`;
      script.async = true;
      document.head.appendChild(script);
      script.onload = () => initMap();
    } else {
      initMap();
    }

    function initMap() {
      if (!window.kakao) return;
      window.kakao.maps.load(() => {
        const container = mapRef.current;
        container.style.width = "100%";
        container.style.height = "400px"; // 반드시 높이 지정

        const options = {
          center: new window.kakao.maps.LatLng(37.5665, 126.978),
          level: 5,
        };
        mapInstance.current = new window.kakao.maps.Map(container, options);
      });
    }
  }, []);

  const handleAddLocation = () => {
    if (!inputLocation.trim()) {
      setError("지역을 입력해주세요!");
      return;
    }
    setSelectedLocation(inputLocation.trim());
    setRecommendations([]);
    setError("");
    setInputLocation("");
  };

  const handleRecommend = async () => {
    if (!selectedLocation || !category) {
      setError("지역과 카테고리를 모두 선택해주세요!");
      return;
    }
    try {
      setError("");
      setLoading(true);
      setRecommendations([]);

      const query = `${selectedLocation} ${category}`;
      const res = await axios.get(KAKAO_URL, {
        headers: { Authorization: `KakaoAK ${KAKAO_REST_API_KEY}` },
        params: { query, size: 10 },
      });

      const places = res.data.documents;
      if (places.length === 0) {
        setError("검색 결과가 없습니다 😢");
        return;
      }

      setRecommendations(places);

      // 첫 번째 결과로 지도 이동
      const first = places[0];
      moveMarker(first);
    } catch (err) {
      console.error(err);
      setError("API 요청 중 오류가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  };

  // 마커 이동
  const moveMarker = (place) => {
    if (!mapInstance.current || !window.kakao) return;
    const lat = parseFloat(place.y);
    const lng = parseFloat(place.x);
    if (isNaN(lat) || isNaN(lng)) return;

    const position = new window.kakao.maps.LatLng(lat, lng);

    // 지도 중심 이동
    mapInstance.current.setCenter(position);

    // 이전 마커 제거
    if (markerInstance.current) markerInstance.current.setMap(null);
    if (infoWindowInstance.current) infoWindowInstance.current.close();

    const marker = new window.kakao.maps.Marker({ position });
    marker.setMap(mapInstance.current);
    markerInstance.current = marker;

    const infowindow = new window.kakao.maps.InfoWindow({
      content: `<div style="padding:6px 10px;font-size:14px;font-weight:bold;color:#000;">${place.place_name}</div>`,
      removable: true,
    });
    infowindow.open(mapInstance.current, marker);
    infoWindowInstance.current = infowindow;
  };

  return (
    <div className="foodpage">
      <h1>🍽️ 맛집 추천 (카카오 API + 지도)</h1>
      <div>
        <input
          value={inputLocation}
          onChange={(e) => setInputLocation(e.target.value)}
          placeholder="지역 입력"
        />
        <button onClick={handleAddLocation}>추가</button>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">카테고리 선택</option>
          <option value="한식">한식</option>
          <option value="중식">중식</option>
          <option value="일식">일식</option>
          <option value="양식">양식</option>
          <option value="패스트푸드">패스트푸드</option>
          <option value="디저트">디저트</option>
        </select>
        <button onClick={handleRecommend}>추천받기</button>
      </div>

      {loading && <p>⏳ 검색 중...</p>}
      {error && <p>{error}</p>}

      <div
        className="foodpage__content"
        style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "20px" }}
      >
        <ul>
          {recommendations.map((place, idx) => (
            <li
              key={idx}
              onClick={() => moveMarker(place)}
              style={{ cursor: "pointer" }}
            >
              <strong>{place.place_name}</strong>
              <p>{place.road_address_name || place.address_name}</p>
              {place.phone && <p>📞 {place.phone}</p>}
            </li>
          ))}
        </ul>
        <div
          ref={mapRef}
          style={{ borderRadius: "12px", overflow: "hidden" }}
        ></div>
      </div>
    </div>
  );
}
