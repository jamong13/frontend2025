import React from 'react'
import UserCardTS from './components/UserCard.tsx'
import UserCardJS from './components/UserCard.jsx'
import './App.css'

const App: React.FC = () => {
  return (
    <div className="app">
      <h1 className="main-title">React TypeScript vs JavaScript 비교</h1>
      
      <div className="comparison-container">
        {/* TypeScript 버전 */}
        <div className="section">
          <h2 className="section-title ts-title">TypeScript 버전</h2>
          <div className="code-block">
            <pre className="code-content">
{`// src/components/UserCard.tsx
import React from 'react'

// 타입 정의
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

const UserCard: React.FC<UserCardProps> = ({ user, onButtonClick }) => {
  // 타입 안전성 - 컴파일 시 에러 검사
  const handleClick = () => {
    onButtonClick(user.id) // 정확한 타입 체크
  }

  return (
    <div className="user-card">
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <p>Age: {user.age}</p>
      <button onClick={handleClick}>
        Click me
      </button>
    </div>
  )
}

export default UserCard`}
            </pre>
          </div>
          
          <div className="demo">
            <UserCardTS 
              user={{ 
                id: 1, 
                name: "김철수", 
                email: "kim@example.com", 
                age: 25 
              }} 
              onButtonClick={(id) => alert(`User ${id} clicked!`) } 
            />
          </div>

          <div className="benefits">
            <h3>✅ TypeScript의 장점:</h3>
            <ul>
              <li>컴파일 시 타입 에러를 미리 발견</li>
              <li>IDE 자동완성 향상</li>
              <li>코드 가독성 및 유지보수성 향상</li>
              <li>리팩토링 시 더 안전함</li>
              <li>문서화 효과 (타입 자체가 문서)</li>
            </ul>
          </div>
        </div>

        {/* JavaScript 버전 */}
        <div className="section">
          <h2 className="section-title js-title">JavaScript 버전</h2>
          <div className="code-block">
            <pre className="code-content">
{`// src/components/UserCard.jsx
import React from 'react'

// 타입이 명시되지 않음
const UserCard = ({ user, onButtonClick }) => {
  // 실행 시점까지 에러를 발견할 수 없음
  const handleClick = () => {
    onButtonClick(user.id)
  }

  return (
    <div className="user-card">
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <p>Age: {user.age}</p>
      <button onClick={handleClick}>
        Click me
      </button>
    </div>
  )
}

export default UserCard`}
            </pre>
          </div>
          
          <div className="demo">
            <UserCardJS 
              user={{ 
                id: 2, 
                name: "이영희", 
                email: "lee@example.com", 
                age: 30 
              }} 
              onButtonClick={(id) => alert(`User ${id} clicked!`) } 
            />
          </div>

          <div className="benefits">
            <h3>⚠️ JavaScript의 특징:</h3>
            <ul>
              <li>더 간결한 코드</li>
              <li>빠른 프로토타이핑</li>
              <li>런타임까지 에러를 알 수 없음</li>
              <li>IDE 지원이 제한적</li>
              <li>대규모 프로젝트에서 관리 어려움</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 실전 비교 */}
      <div className="practical-examples">
        <h2 className="examples-title">실전 비교 예제</h2>
        
        <div className="example-section">
          <h3>1. Props 타입 안전성</h3>
          <div className="code-comparison">
            <div className="comparison-item">
              <h4>TypeScript</h4>
              <pre>
{`// 잘못된 props 전달 시 컴파일 에러 발생 ✅
<UserCard user="wrong type" /> // ❌ Error!

// 올바른 사용법
<UserCard user={{ id: 1, name: "..." }} />`}
              </pre>
            </div>
            <div className="comparison-item">
              <h4>JavaScript</h4>
              <pre>
{`// 에러가 발생해도 컴파일 통과 ⚠️
<UserCard user="wrong type" /> // 🟡 No Error

// 런타임 에러만 확인 가능
// 이미 배포 후 사용자가 발견...`}
              </pre>
            </div>
          </div>
        </div>

        <div className="example-section">
          <h3>2. 자동완성 및 개발 경험</h3>
          <div className="code-comparison">
            <div className="comparison-item">
              <h4>TypeScript</h4>
              <pre>
{`// user. 입력 시 바로 자동완성 제공
user.  // name, email, age 자동완성

// 함수 호출 시 파라미터 타입 힌트 제공
onButtonClick(id: number)`}
              </pre>
            </div>
            <div className="comparison-item">
              <h4>JavaScript</h4>
              <pre>
{`// 자동완성 힌트가 제한적
user.  // 모든 속성 제안

// 함수 파라미터 확인 어려움
onButtonClick(...) // 타입 불명확`}
              </pre>
            </div>
          </div>
        </div>

        <div className="example-section">
          <h3>3. 에러 발견 시점</h3>
          <div className="code-comparison">
            <div className="comparison-item">
              <h4>TypeScript</h4>
              <pre>
{`// 컴파일 시점에 즉시 에러 발견 ✅
// 개발 중: ❌ Error!
// 배포 전: 수정 완료`}
              </pre>
            </div>
            <div className="comparison-item">
              <h4>JavaScript</h4>
              <pre>
{`// 런타임에 에러 발견 ⚠️
// 개발 중: 정상 동작
// 배포 후: 💥 Crash!
// 사용자: 불만 증가...`}
              </pre>
            </div>
          </div>
        </div>
      </div>

      <div className="conclusion">
        <h2>결론</h2>
        <p>
          <strong>TypeScript</strong>는 타입 안전성을 제공하여 대규모 프로젝트에서 
          버그를 줄이고 개발 효율성을 높입니다. <strong>JavaScript</strong>는 빠른 개발과 
          유연성을 제공하지만, 복잡한 프로젝트에서는 런타임 에러 위험이 있습니다.
        </p>
        <p className="recommendation">
          💡 권장사항: 프로젝트 규모와 팀 크기에 따라 선택하세요. 
          대규모 프로젝트나 팀 프로젝트에서는 TypeScript를 적극 권장합니다!
        </p>
      </div>
    </div>
  )
}

export default App

