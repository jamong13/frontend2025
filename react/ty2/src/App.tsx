import { useState } from 'react'
import './App.css'

// 기본 타입
const App = () => {
  const [result, setResult] = useState<number>(0)

  // 배열과 객체 예제
  const numbers: number[] = [1, 2, 3, 4, 5]
  const fruits: Array<string> = ["사과", "바나나", "오렌지"]

  // 인터페이스
  interface Person {
    name: string
    age: number
    email?: string
  }

  const person1: Person = {
    name: "홍길동",
    age: 30
  }

  const person2: Person = {
    name: "김철수",
    age: 25,
    email: "kim@example.com"
  }

  // 클래스
  class Calculator {
    private result: number = 0

    add(value: number): void {
      this.result += value
    }

    subtract(value: number): void {
      this.result -= value
    }

    multiply(value: number): void {
      this.result *= value
    }

    divide(value: number): void {
      if (value === 0) {
        throw new Error("0으로 나눌 수 없습니다")
      }
      this.result /= value
    }

    getResult(): number {
      return this.result
    }

    reset(): void {
      this.result = 0
    }
  }

  // 계산 함수
  const handleCalculate = () => {
    const calc = new Calculator()
    calc.add(10)
    calc.multiply(3)
    calc.subtract(5)
    setResult(calc.getResult())
  }

  // 함수 타입
  type MathOperation = (a: number, b: number) => number

  const add: MathOperation = (a, b) => a + b
  const multiply: MathOperation = (a, b) => a * b

  // 제네릭
  function identity<T>(arg: T): T {
    return arg
  }

  // 유니온 타입
  type Status = "pending" | "approved" | "rejected"

  function checkStatus(status: Status): string {
    switch (status) {
      case "pending":
        return "대기 중"
      case "approved":
        return "승인됨"
      case "rejected":
        return "거부됨"
    }
  }

  return (
    <div className="app">
      <header>
        <h1>🚀 React TypeScript 예제</h1>
      </header>

      <div className="container">
        {/* 기본 타입 섹션 */}
        <section className="card">
          <h2>1. 기본 타입</h2>
          <div className="content">
            <p><strong>name:</strong> {"TypeScript"}</p>
            <p><strong>age:</strong> {13}</p>
            <p><strong>isActive:</strong> {true ? "true" : "false"}</p>
          </div>
        </section>

        {/* 배열 섹션 */}
        <section className="card">
          <h2>2. 배열</h2>
          <div className="content">
            <p><strong>숫자 배열:</strong> [{numbers.join(', ')}]</p>
            <p><strong>과일 배열:</strong> [{fruits.join(', ')}]</p>
          </div>
        </section>

        {/* 인터페이스 섹션 */}
        <section className="card">
          <h2>3. 인터페이스</h2>
          <div className="content">
            <div className="person-card">
              <h3>{person1.name}</h3>
              <p>나이: {person1.age}</p>
              <p>이메일: {person1.email || "없음"}</p>
            </div>
            <div className="person-card">
              <h3>{person2.name}</h3>
              <p>나이: {person2.age}</p>
              <p>이메일: {person2.email || "없음"}</p>
            </div>
          </div>
        </section>

        {/* 클래스 섹션 */}
        <section className="card">
          <h2>4. 클래스</h2>
          <div className="content">
            <button onClick={handleCalculate} className="calculate-btn">
              계산기 실행 (10 + 10 × 3 - 5 = ?)
            </button>
            <div className="result-box">
              <strong>결과: {result}</strong>
            </div>
          </div>
        </section>

        {/* 함수 타입 섹션 */}
        <section className="card">
          <h2>5. 함수 타입</h2>
          <div className="content">
            <p>5 + 3 = <strong>{add(5, 3)}</strong></p>
            <p>5 × 3 = <strong>{multiply(5, 3)}</strong></p>
          </div>
        </section>

        {/* 제네릭 섹션 */}
        <section className="card">
          <h2>6. 제네릭</h2>
          <div className="content">
            <p>문자열: <strong>{identity<string>("Hello TypeScript")}</strong></p>
            <p>숫자: <strong>{identity<number>(42)}</strong></p>
          </div>
        </section>

        {/* 유니온 타입 섹션 */}
        <section className="card">
          <h2>7. 유니온 타입</h2>
          <div className="content">
            <div className="status-badges">
              <span className="badge pending">{checkStatus("pending")}</span>
              <span className="badge approved">{checkStatus("approved")}</span>
              <span className="badge rejected">{checkStatus("rejected")}</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default App

