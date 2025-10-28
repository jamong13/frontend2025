# React TypeScript vs JavaScript 비교 예제

React를 TypeScript와 JavaScript로 각각 구현하여 차이점을 비교하는 예제 프로젝트입니다.

## 🚀 시작하기

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:5173](http://localhost:5173) 을 열어 확인하세요.

## 📁 프로젝트 구조

```
src/
├── components/
│   ├── UserCard.tsx    # TypeScript 버전
│   └── UserCard.jsx    # JavaScript 버전
├── App.tsx             # 메인 앱 (비교 페이지)
├── main.tsx            # 진입점
└── ...
```

## 🔍 주요 차이점

### 1. 타입 안전성

#### TypeScript
```typescript
interface User {
  id: number
  name: string
  email: string
}

// 컴파일 시점에 타입 검사
const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return <div>{user.name}</div>
}
```

#### JavaScript
```javascript
// 런타임까지 타입 체크 불가
const UserCard = ({ user }) => {
  return <div>{user.name}</div>
}
```

### 2. 에러 발견 시점

- **TypeScript**: 컴파일 시점에 즉시 에러 발견 ✅
- **JavaScript**: 런타임에 에러 발견 ⚠️

### 3. IDE 지원

- **TypeScript**: 완벽한 자동완성 및 타입 힌트 ✅
- **JavaScript**: 제한적인 IDE 지원 ⚠️

## 💡 언제 어떤 것을 사용할까?

### TypeScript를 선택하는 경우 ✅
- 대규모 프로젝트
- 팀 프로젝트
- 타입 안전성이 중요한 프로젝트
- 장기 유지보수가 필요한 프로젝트

### JavaScript를 선택하는 경우 ⚠️
- 빠른 프로토타이핑
- 소규모 프로젝트
- 기존 JavaScript 레거시 코드베이스
- 학습 목적

## 📚 예제에서 비교하는 내용

1. **Props 타입 정의 방법**
2. **컴포넌트 타입 선언**
3. **함수 타입 안전성**
4. **자동완성 및 IDE 지원**
5. **에러 발견 시점**

## 🛠️ 사용된 기술

- React 18
- TypeScript 5
- Vite
- CSS3

## 📝 빌드

```bash
npm run build
```

빌드 결과물은 `dist/` 폴더에 생성됩니다.

