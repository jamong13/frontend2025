import React from 'react'

// ✅ TypeScript: 명시적인 타입 정의
interface User {
  id: number
  name: string
  email: string
  age: number
}

interface UserCardProps {
  user: User
  onButtonClick: (id: number) => void
}

// ✅ TypeScript: Props 타입을 명시적으로 선언
const UserCard: React.FC<UserCardProps> = ({ user, onButtonClick }) => {
  // ✅ TypeScript: 타입 안전한 함수 선언
  const handleClick = (): void => {
    onButtonClick(user.id) // ✅ 정확한 타입 체크
  }

  return (
    <div className="user-card" style={styles.card}>
      <h3 style={styles.name}>{user.name}</h3>
      <p style={styles.email}>{user.email}</p>
      <p style={styles.age}>Age: {user.age}</p>
      <button onClick={handleClick} style={styles.button}>
        Click me (TS)
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
    color: '#667eea',
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
    backgroundColor: '#667eea',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px',
  },
}

export default UserCard

