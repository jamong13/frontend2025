import React from 'react'

// ⚠️ JavaScript: 타입 정의 없음 - 런타임까지 에러를 발견할 수 없음
const UserCard = ({ user, onButtonClick }) => {
  // ⚠️ JavaScript: 타입 체크 없이 함수 실행
  const handleClick = () => {
    onButtonClick(user.id)
  }

  return (
    <div className="user-card" style={styles.card}>
      <h3 style={styles.name}>{user.name}</h3>
      <p style={styles.email}>{user.email}</p>
      <p style={styles.age}>Age: {user.age}</p>
      <button onClick={handleClick} style={styles.button}>
        Click me (JS)
      </button>
    </div>
  )
}

const styles = {
  card: {
    padding: '20px',
    margin: '10px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  },
  name: {
    color: '#764ba2',
    marginBottom: '10px',
  },
  email: {
    color: '#666',
    marginBottom: '5px',
  },
  age: {
    color: '#666',
    marginBottom: '15px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#764ba2',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px',
  },
}

export default UserCard

