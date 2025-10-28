import React, { useState } from "react";

export default function App() {
  // const [result, setResult] = useState<number>(0);
  // 배열과 객체 예제

  // 자바스크립트
  // const numbers = [1, 2, 3, 4, 5];
  // const fruits = ["사과", "바나나", "오렌지"];

  // 타입스크립트 -> 속도도 이렇게 적으면 빠름
  const numbers: number[] = [1, 2, 3, 4, 5]; // 숫자 배열 타입
  const fruits: Array<string> = ["사과", "바나나", "오렌지"]; //문자 배열 타입

  // 제네릭 Array<type 성격>

  //인터페이스
  interface Person {
    name: string;
    age: number;
    email?: string;
    // ?는 선택사항이라는 의미
  }
  // Person 인터페이스를 상속(타입 상속) person1 객체
  const person1: Person = {
    name: "홍길동",
    age: 30,
  };
  const person2: Person = {
    name: "김철수",
    age: 25,
    email: "kim@example.com",
  };
  return (
    <div className="App">
      <header>
        <h1>react TypeScript 예제</h1>
        <div className="container">
          {" "}
          {/* 기본 타입 섹션 */}
          <section className="card">
            <h2>1. 기본 타입</h2>
            <div className="content">
              <p>
                <strong>name:</strong> {"TypeScript"}
              </p>
              <p>
                <strong>age:</strong> {13}
              </p>
              <p>
                <strong>isActive:</strong> {true ? "true" : "false"}
                {/* 불필요한 코드 경고 */}
              </p>
            </div>
          </section>
          <section className="card">
            <h2>2. 배열</h2>
            <div className="content">
              <p>
                <strong>숫자배열</strong> [{numbers.join(",")}]
              </p>
              <p>
                <strong>과일배열</strong> [{fruits.join(",")}]
              </p>
            </div>
          </section>
          {/* 인터페이스 */}
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
        </div>
      </header>
    </div>
  );
}
