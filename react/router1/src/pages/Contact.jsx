import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `안녕하세요 ${formData.name}님! 메시지가 전송되었습니다. (이는 예제이므로 실제로는 전송되지 않습니다)`
    );
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="page">
      <div className="container">
        {" "}
        <h1>연락처</h1>
        <p>궁금한 점이 있으면 언제든지 연락해 주세요.</p>
        <div style={{ display: "flex", gap: "50px", marginTop: "40px" }}>
          {/* 연락처 정보 */}
          <div style={{ flex: 1 }}>
            <h3 style={{ color: "#333", marginBottom: "20px" }}>연락처 정보</h3>
            <div style={{ color: "#666", lineHeight: "1.8" }}>
              <p>
                <strong>이메일:</strong> contact@example.com
              </p>
              <p>
                <strong>전화번호:</strong> 02-1234-5678
              </p>
              <p>
                <strong>주소:</strong> 서울특별시 강남구 테헤란로 123
              </p>
              <p>
                <strong>운영시간:</strong> 평일 09:00 - 18:00
              </p>
            </div>
          </div>

          {/* 연락 폼 */}
          <div style={{ flex: 1 }}>
            <h3 style={{ color: "#333", marginBottom: "20px" }}>
              메시지 보내기
            </h3>
            <form
              onSubmit={handleSubmit}
              style={{ display: "flex", flexDirection: "column", gap: "15px" }}
            >
              <input
                type="text"
                name="name"
                placeholder="이름"
                value={formData.name}
                onChange={handleChange}
                required
                style={{
                  padding: "12px",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                  fontSize: "16px",
                }}
              />
              <input
                type="email"
                name="email"
                placeholder="이메일"
                value={formData.email}
                onChange={handleChange}
                required
                style={{
                  padding: "12px",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                  fontSize: "16px",
                }}
              />
              <textarea
                name="message"
                placeholder="메시지"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                style={{
                  padding: "12px",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                  fontSize: "16px",
                  resize: "vertical",
                }}
              />
              <button
                type="submit"
                style={{
                  padding: "12px 24px",
                  backgroundColor: "#61dafb",
                  color: "#282c34",
                  border: "none",
                  borderRadius: "4px",
                  fontSize: "16px",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
                메시지 보내기
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
