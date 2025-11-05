import React, { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  // 상태관리
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  //users : 받아온 사용자 데이터를 저장
  // loading : 로딩 여부
  //error 데이터 저장

  //사용자 데이터 가져오기
  const fetchUsers = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      //Axios는 자동으로 Json 파싱을 해주므로 response.data 바로접근가능
      setUsers(response.data);
    } catch (err) {
      if (err.response) {
        setError(`서버오류: ${err.response.status}`);
        //404- 요청한 데이터 없음
        //500- 서버오류
        //401 - 인증실패
        //403 권한없음
      } else if (err.request) {
        //요청은 전송되었지만 응답 받지못함
        setError("서버로부터 응답이 없습니다.");
        //서버죽음(응답없음), 인터넷연결 문제, 요청 타임아웃
      } else {
        // 요청 설정 중 오류 발생
        setError(`요청 오류: ${err.message}`);
        //잘못된 url (ht*tps://) 문자, axios 설정문제, 코드문법문제
      }
    } finally {
      setLoading(false);
    }

    //오류속성
    //err.response.status - http상태코드 400 403 404 500
    //err.response.data 서버가 전달한 에러메시지
    // err.request 서버로 보낸 실제 요청 객체
    // err.message 자바스크립트 기본 오류 메시지
  };
  //컴포넌트 마운트시 데이터 로드
  useEffect(() => {
    fetchUsers();
  }, []);

  // 새로고침 핸들러
  const handleRefresh = () => {
    fetchUsers();
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>사용자 목록</h1>
        <button style={styles.refreshButton}>🔄 새로고침</button>
      </header>
      {/* 로딩상태 */}
      {loading && (
        <div style={styles.messageContainer}>
          <div style={styles.spinner}></div>
          <p style={styles.loadingText}>로딩중...</p>
        </div>
      )}
      {/* 로딩 상태 */}
      {loading && (
        <div style={styles.messageContainer}>
          <div style={styles.spinner}></div>
          <p style={styles.loadingText}>로딩중...</p>
        </div>
      )}

      {/* 에러 상태 */}
      {error && (
        <div style={styles.errorContainer}>
          <p style={styles.errorText}>⚠️ {error}</p>
          <button onClick={handleRefresh} style={styles.retryButton}>
            다시 시도
          </button>
        </div>
      )}

      {/* 사용자 목록 */}
      {!loading && !error && (
        <div style={styles.userGrid}>
          {users.map((user) => (
            <div key={user.id} style={styles.userCard}>
              <div style={styles.userAvatar}>{user.name.charAt(0)}</div>
              <h3 style={styles.userName}>{user.name}</h3>
              <p style={styles.userEmail}>📧 {user.email}</p>
              <p style={styles.userCompany}>🏢 {user.company.name}</p>
            </div>
          ))}
        </div>
      )}

      {/* 데이터가 없을 때 */}
      {!loading && !error && users.length === 0 && (
        <div style={styles.messageContainer}>
          <p style={styles.emptyText}>사용자 정보가 없습니다.</p>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "2rem",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f5f5f5",
    minHeight: "100vh",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "2rem",
  },
  title: {
    color: "#333",
    fontSize: "2rem",
  },
  refreshButton: {
    padding: "10px 20px",
    fontSize: "1rem",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  messageContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "3rem",
  },
  spinner: {
    width: "50px",
    height: "50px",
    border: "5px solid #f3f3f3",
    borderTop: "5px solid #007bff",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  },
  loadingText: {
    marginTop: "1rem",
    fontSize: "1.2rem",
    color: "#666",
  },
  errorContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "2rem",
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  },
  errorText: {
    color: "#dc3545",
    fontSize: "1.2rem",
    marginBottom: "1rem",
  },
  retryButton: {
    padding: "10px 20px",
    backgroundColor: "#28a745",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1rem",
  },
  userGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
    gap: "1.5rem",
  },
  userCard: {
    backgroundColor: "white",
    borderRadius: "10px",
    padding: "1.5rem",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    transition: "transform 0.3s, box-shadow 0.3s",
    cursor: "pointer",
    textAlign: "center",
  },
  userAvatar: {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    backgroundColor: "#007bff",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.5rem",
    fontWeight: "bold",
    margin: "0 auto 1rem",
  },
  userName: {
    margin: "0.5rem 0",
    color: "#333",
    fontSize: "1.2rem",
  },
  userEmail: {
    color: "#666",
    fontSize: "0.9rem",
    margin: "0.5rem 0",
  },
  userCompany: {
    color: "#888",
    fontSize: "0.85rem",
    margin: "0.5rem 0",
  },
  emptyText: {
    fontSize: "1.2rem",
    color: "#999",
  },
};
