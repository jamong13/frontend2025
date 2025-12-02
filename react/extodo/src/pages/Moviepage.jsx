import React, { useEffect, useState } from "react";
import axios from "axios";

const API_KEY = "15e2a5f942912e28e8c5d6b8e9d1c9ce";
const BASE_URL = "https://api.themoviedb.org/3";

const categories = [
  { id: "28", name: "액션" },
  { id: "35", name: "코미디" },
  { id: "27", name: "공포" },
  { id: "10749", name: "로맨스" },
  { id: "53", name: "스릴러" },
  { id: "16", name: "애니메이션" },
];

export default function MoviePage() {
  const [movies, setMovies] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const fetchMovies = async (genreId = null) => {
    try {
      let url = `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=ko-KR&sort_by=popularity.desc`;
      if (genreId) url += `&with_genres=${genreId}`;

      const res = await axios.get(url);
      const allMovies = res.data.results;

      // ✅ 무작위 9개만 선택
      const randomMovies = allMovies
        .sort(() => 0.5 - Math.random())
        .slice(0, 9);

      setMovies(randomMovies);
    } catch (err) {
      console.error("영화 불러오기 실패:", err);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  useEffect(() => {
    if (selectedCategory) fetchMovies(selectedCategory);
  }, [selectedCategory]);

  return (
    <div
      style={{
        fontFamily: "Pretendard, sans-serif",
        backgroundColor: "#0f172a",
        color: "white",
        minHeight: "100vh",
        padding: "2rem",
      }}
    >
      <h1 style={{ fontSize: "2rem", textAlign: "center" }}>
        🎬 오늘의 추천 영화
      </h1>

      {/* 카테고리 버튼 */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "1rem",
          margin: "1.5rem 0",
        }}
      >
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            style={{
              backgroundColor:
                selectedCategory === cat.id ? "#1d4ed8" : "#334155",
              color: "white",
              border: "none",
              padding: "0.5rem 1.2rem",
              borderRadius: "8px",
              cursor: "pointer",
              transition: "0.2s",
            }}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* ✅ 영화 3×3 그리드 */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)", // 항상 3개씩
          gap: "1.5rem",
          justifyItems: "center",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        {movies.map((movie) => (
          <div
            key={movie.id}
            style={{
              width: "100%",
              backgroundColor: "#1e293b",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
              transition: "transform 0.3s ease",
            }}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              style={{
                width: "100%",
                height: "360px",
                objectFit: "cover",
              }}
            />
            <div style={{ padding: "0.75rem" }}>
              <h3 style={{ fontSize: "1rem", marginBottom: "0.3rem" }}>
                {movie.title}
              </h3>
              <p style={{ fontSize: "0.85rem", color: "#94a3b8" }}>
                ⭐ {movie.vote_average.toFixed(1)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
