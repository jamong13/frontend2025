import React, { useState } from 'react'

// ✅ TypeScript: 명시적인 타입 정의
interface ExampleProps {
  title: string
}

// ✅ TypeScript 버전의 컴포넌트
export const TypeScriptExample: React.FC<ExampleProps> = ({ title }) => {
  // ✅ TypeScript: useState의 제네릭으로 타입 명시
  const [count, setCount] = useState<number>(0)
  const [name, setName] = useState<string>('')

  // ✅ TypeScript: 함수의 반환 타입과 파라미터 타입 명시
  const handleIncrement = (): void => {
    setCount(count + 1)
  }

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setName(event.target.value)
  }

  return (
    <div style={styles.container}>
      <h2>{title}</h2>
      <p>Count: {count}</p>
      <button onClick={handleIncrement} style={styles.button}>
        Increment
      </button>
      <input
        type="text"
        value={name}
        onChange={handleNameChange}
        placeholder="Enter your name"
        style={styles.input}
      />
      <p>Name: {name}</p>
    </div>
  )
}

// ⚠️ JavaScript 버전의 컴포넌트
export const JavaScriptExample = ({ title }: ExampleProps) => {
  // ⚠️ JavaScript: 타입 없이 useState 사용
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')

  // ⚠️ JavaScript: 타입이 명시되지 않음
  const handleIncrement = () => {
    setCount(count + 1)
  }

  const handleNameChange = (event) => {
    setName(event.target.value)
  }

  return (
    <div style={styles.container}>
      <h2>{title}</h2>
      <p>Count: {count}</p>
      <button onClick={handleIncrement} style={styles.button}>
        Increment
      </button>
      <input
        type="text"
        value={name}
        onChange={handleNameChange}
        placeholder="Enter your name"
        style={styles.input}
      />
      <p>Name: {name}</p>
    </div>
  )
}

const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#f5f5f5',
    borderRadius: '8px',
    margin: '20px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#667eea',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    margin: '5px',
  },
  input: {
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    margin: '5px',
    width: '200px',
  },
}

// ✅ TypeScript: 타입 가드 예제
export const TypeSafetyExample = () => {
  type UserRole = 'admin' | 'user' | 'guest'

  interface User {
    id: number
    name: string
    role: UserRole
  }

  const user: User = {
    id: 1,
    name: 'John',
    role: 'admin', // ✅ 'admin' | 'user' | 'guest' 만 가능
  }

  const checkAccess = (role: UserRole): boolean => {
    return role === 'admin' || role === 'user'
  }

  return (
    <div>
      <p>User Role: {user.role}</p>
      <p>Has Access: {checkAccess(user.role) ? 'Yes' : 'No'}</p>
    </div>
  )
}

