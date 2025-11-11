# JSX에서 TSX로의 변경사항 상세 비교

## 목차
1. [프로젝트 설정 파일](#1-프로젝트-설정-파일)
2. [타입 정의 추가](#2-타입-정의-추가)
3. [컴포넌트별 변경사항](#3-컴포넌트별-변경사항)
4. [주요 TypeScript 개념](#4-주요-typescript-개념)
5. [장점과 이점](#5-장점과-이점)

---

## 1. 프로젝트 설정 파일

### 1.1 새로 추가된 파일들

#### `tsconfig.json` (신규)
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true
  }
}
```
- TypeScript 컴파일러 설정
- 엄격한 타입 체크 활성화
- JSX 변환 방식 지정

#### `tsconfig.node.json` (신규)
- Vite 설정 파일용 TypeScript 구성

#### `src/types.ts` (신규)
```typescript
export interface Todo {
  id: number;
  isDone: boolean;
  content: string;
  createdDate: number;
}
```
- 공통으로 사용되는 타입 정의
- 재사용 가능한 인터페이스

### 1.2 수정된 파일들

#### `package.json`
**추가된 의존성:**
```json
"devDependencies": {
  "typescript": "^5.7.2",
  "typescript-eslint": "^8.0.0"
}
```

**변경된 빌드 스크립트:**
```json
"scripts": {
  "build": "tsc && vite build"  // TypeScript 컴파일 추가
}
```

#### `eslint.config.js`
**JSX 버전:**
```javascript
files: ['**/*.{js,jsx}']
```

**TSX 버전:**
```javascript
import tseslint from 'typescript-eslint'

export default tseslint.config(
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}']
  }
)
```

#### `index.html`
**JSX 버전:**
```html
<script type="module" src="/src/main.jsx"></script>
```

**TSX 버전:**
```html
<script type="module" src="/src/main.tsx"></script>
```

---

## 2. 타입 정의 추가

### 2.1 공통 타입 인터페이스

#### `src/types.ts` (신규 파일)
```typescript
export interface Todo {
  id: number;
  isDone: boolean;
  content: string;
  createdDate: number;
}
```

**역할:**
- 할 일 데이터의 구조를 명확하게 정의
- 모든 컴포넌트에서 동일한 타입 사용
- 타입 안정성 보장

---

## 3. 컴포넌트별 변경사항

### 3.1 App.jsx → App.tsx

#### 파일 확장자
```
App.jsx → App.tsx
```

#### Import 변경
**JSX:**
```javascript
import React, { useState, useRef } from 'react'
```

**TSX:**
```typescript
import React, { useState, useRef } from 'react'
import { Todo } from './types';  // 타입 import 추가
```

#### State 타입 지정
**JSX:**
```javascript
const [todo, setTodo] = useState(mockTodo);
const idRef = useRef(3);
```

**TSX:**
```typescript
const [todo, setTodo] = useState<Todo[]>(mockTodo);
const idRef = useRef<number>(3);
```

**설명:**
- `useState<Todo[]>`: state가 Todo 배열임을 명시
- `useRef<number>`: ref가 숫자 타입임을 명시

#### 함수 매개변수 타입 지정
**JSX:**
```javascript
const onCreate = (content) => {
  const newItem = {
    id: idRef.current,
    content,
    isDone: false,
    createdDate: new Date().getTime(),
  }
  setTodo([newItem, ...todo]);
  idRef.current += 1;
};
```

**TSX:**
```typescript
const onCreate = (content: string) => {
  const newItem: Todo = {
    id: idRef.current,
    content,
    isDone: false,
    createdDate: new Date().getTime(),
  }
  setTodo([newItem, ...todo]);
  idRef.current += 1;
};
```

**설명:**
- `content: string`: 매개변수 타입 명시
- `newItem: Todo`: 변수 타입 명시

#### Map/Filter 함수 타입 지정
**JSX:**
```javascript
const onUpdate = (targetId) => {
  setTodo(todo.map((it) => {
    return it.id === targetId ? {...it, isDone: !it.isDone} : it
  }))
}

const onDelete = (targetId) => {
  setTodo(todo.filter((it) => it.id !== targetId));
};
```

**TSX:**
```typescript
const onUpdate = (targetId: number) => {
  setTodo(todo.map((it: Todo) => {
    return it.id === targetId ? {...it, isDone: !it.isDone} : it
  }))
}

const onDelete = (targetId: number) => {
  setTodo(todo.filter((it: Todo) => it.id !== targetId));
};
```

**설명:**
- `targetId: number`: 매개변수 타입
- `(it: Todo)`: 콜백 함수 매개변수 타입

#### Mock 데이터 타입 지정
**JSX:**
```javascript
const mockTodo = [
  {
    id: 0,
    isDone: false,
    content: "react 공부하기",
    createdDate: new Date().getTime(),
  }
]
```

**TSX:**
```typescript
const mockTodo: Todo[] = [
  {
    id: 0,
    isDone: false,
    content: "react 공부하기",
    createdDate: new Date().getTime(),
  }
]
```

---

### 3.2 main.jsx → main.tsx

#### 파일 확장자
```
main.jsx → main.tsx
```

#### Import 변경
**JSX:**
```javascript
import App from './App.jsx'
```

**TSX:**
```typescript
import App from './App.tsx'
```

#### Non-null Assertion 추가
**JSX:**
```javascript
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

**TSX:**
```typescript
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

**설명:**
- `!` (non-null assertion): TypeScript에게 이 값이 null이 아님을 보장
- `document.getElementById()`는 `HTMLElement | null`을 반환하지만, 우리는 이 요소가 존재함을 확신

---

### 3.3 Header.jsx → Header.tsx

#### 변경사항
- 파일 확장자만 변경 (`.jsx` → `.tsx`)
- 함수에 Props가 없으므로 타입 정의 불필요
- 코드 내용은 동일

**JSX & TSX (동일):**
```typescript
import React from 'react'
import './Header.css';

export default function Header() {
  return (
    <div className='Header'>
      <h3>오늘은 📆</h3>
      <h1>{new Date().toDateString()}</h1>
    </div>
  )
}
```

---

### 3.4 TodoEditor.jsx → TodoEditor.tsx

#### Props 인터페이스 정의
**JSX:**
```javascript
export default function TodoEditor({onCreate}) {
  // ...
}
```

**TSX:**
```typescript
interface TodoEditorProps {
  onCreate: (content: string) => void;
}

export default function TodoEditor({ onCreate }: TodoEditorProps) {
  // ...
}
```

**설명:**
- `TodoEditorProps`: 컴포넌트가 받는 props의 타입 정의
- `onCreate: (content: string) => void`: 함수 타입 명시
  - 문자열을 받아서 반환값이 없는 함수

#### State 타입 지정
**JSX:**
```javascript
const [content, setContent] = useState("");
const inputRef = useRef();
```

**TSX:**
```typescript
const [content, setContent] = useState<string>("");
const inputRef = useRef<HTMLInputElement>(null);
```

**설명:**
- `useState<string>`: state가 문자열 타입
- `useRef<HTMLInputElement>`: ref가 input 요소를 참조

#### 이벤트 핸들러 타입
**JSX:**
```javascript
const onChangeContent = (e) => {
  setContent(e.target.value);
};

const onKeyDown = (e) => {
  if(e.keyCode == 13){
    onSubmit();
  }
};
```

**TSX:**
```typescript
const onChangeContent = (e: React.ChangeEvent<HTMLInputElement>) => {
  setContent(e.target.value);
};

const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
  if (e.keyCode === 13) {
    onSubmit();
  }
};
```

**설명:**
- `React.ChangeEvent<HTMLInputElement>`: input의 change 이벤트 타입
- `React.KeyboardEvent<HTMLInputElement>`: input의 keyboard 이벤트 타입
- `==` → `===`: TypeScript에서 엄격한 비교 권장

#### Optional Chaining 사용
**JSX:**
```javascript
const onSubmit = () => {
  if(!content){
    inputRef.current.focus();
    return;
  }
  // ...
}
```

**TSX:**
```typescript
const onSubmit = () => {
  if (!content) {
    inputRef.current?.focus();
    return;
  }
  // ...
}
```

**설명:**
- `?.` (optional chaining): inputRef.current가 null일 수 있으므로 안전하게 접근

#### ref 속성 추가
**TSX:**
```typescript
<input
  ref={inputRef}  // ref 속성 명시적으로 추가
  placeholder="새로운 Todo..."
  value={content}
  onChange={onChangeContent}
  onKeyDown={onKeyDown}
/>
```

---

### 3.5 TodoItem.jsx → TodoItem.tsx

#### Props 인터페이스 정의
**JSX:**
```javascript
export default function TodoItem({id, content, isDone, createdDate, onUpdate, onDelete}) {
  // ...
}
```

**TSX:**
```typescript
interface TodoItemProps {
  id: number;
  content: string;
  isDone: boolean;
  createdDate: number;
  onUpdate: (id: number) => void;
  onDelete: (id: number) => void;
}

export default function TodoItem({ 
  id, 
  content, 
  isDone, 
  createdDate, 
  onUpdate, 
  onDelete 
}: TodoItemProps) {
  // ...
}
```

**설명:**
- 모든 props의 타입을 명시
- 함수 타입도 정확하게 정의 (`(id: number) => void`)

---

### 3.6 TodoList.jsx → TodoList.tsx

#### Props 인터페이스 정의
**JSX:**
```javascript
export default function TodoList({todo, onUpdate, onDelete}) {
  // ...
}
```

**TSX:**
```typescript
import { Todo } from '../types';

interface TodoListProps {
  todo: Todo[];
  onUpdate: (id: number) => void;
  onDelete: (id: number) => void;
}

export default function TodoList({ todo, onUpdate, onDelete }: TodoListProps) {
  // ...
}
```

#### State 타입 지정
**JSX:**
```javascript
const [search, setSearch] = useState("");
```

**TSX:**
```typescript
const [search, setSearch] = useState<string>("");
```

#### 이벤트 핸들러 타입
**JSX:**
```javascript
const onChangeSearch = (e) => {
  setSearch(e.target.value);
}
```

**TSX:**
```typescript
const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
  setSearch(e.target.value);
}
```

#### 함수 반환 타입 명시
**JSX:**
```javascript
const getSearchResult = () => {
  return search === "" ? todo : todo.filter((it) => 
    it.content.toLowerCase().includes(search.toLowerCase())
  );
};
```

**TSX:**
```typescript
const getSearchResult = (): Todo[] => {
  return search === "" ? todo : todo.filter((it) => 
    it.content.toLowerCase().includes(search.toLowerCase())
  );
};
```

**설명:**
- `: Todo[]`: 함수가 Todo 배열을 반환함을 명시

---

## 4. 주요 TypeScript 개념

### 4.1 Interface vs Type

**Interface 사용 (권장):**
```typescript
interface TodoEditorProps {
  onCreate: (content: string) => void;
}
```

**Type Alias 사용:**
```typescript
type TodoEditorProps = {
  onCreate: (content: string) => void;
}
```

**차이점:**
- Interface: 확장 가능, 선언 병합 가능
- Type: 유니온, 인터섹션 등 더 복잡한 타입 표현 가능

### 4.2 제네릭 (Generics)

```typescript
// useState에 제네릭 사용
const [todo, setTodo] = useState<Todo[]>(mockTodo);

// useRef에 제네릭 사용
const inputRef = useRef<HTMLInputElement>(null);
```

**설명:**
- `<Todo[]>`: 이 state는 Todo 배열만 저장 가능
- `<HTMLInputElement>`: 이 ref는 input 요소만 참조 가능

### 4.3 함수 타입

```typescript
// 함수 매개변수 타입
const onCreate = (content: string) => { ... }

// 함수 전체 타입
type OnCreateFunction = (content: string) => void;

// Props에서 함수 타입 정의
interface Props {
  onCreate: (content: string) => void;
}
```

### 4.4 이벤트 타입

```typescript
// Input Change 이벤트
React.ChangeEvent<HTMLInputElement>

// Keyboard 이벤트
React.KeyboardEvent<HTMLInputElement>

// Mouse 이벤트
React.MouseEvent<HTMLButtonElement>

// Form Submit 이벤트
React.FormEvent<HTMLFormElement>
```

### 4.5 Optional Chaining & Non-null Assertion

```typescript
// Optional Chaining (?)
inputRef.current?.focus();  // current가 null이면 실행 안 함

// Non-null Assertion (!)
document.getElementById('root')!  // 절대 null이 아니라고 보장
```

---

## 5. 장점과 이점

### 5.1 타입 안정성

**JSX에서 발생 가능한 오류:**
```javascript
// JSX
const onCreate = (content) => {
  onCreate(123);  // 숫자를 전달해도 오류 없음 (런타임 에러 가능)
}
```

**TSX에서 방지:**
```typescript
// TSX
const onCreate = (content: string) => {
  onCreate(123);  // ❌ 컴파일 에러: number는 string에 할당 불가
}
```

### 5.2 자동완성 (IntelliSense)

```typescript
// Todo 객체의 속성을 자동완성으로 확인 가능
todo.  // ← 여기서 id, content, isDone, createdDate가 자동완성됨
```

### 5.3 리팩토링 안정성

```typescript
// Todo 인터페이스를 변경하면
interface Todo {
  id: number;
  isDone: boolean;
  content: string;
  createdDate: number;
  priority: string;  // 새 필드 추가
}

// 관련된 모든 코드에서 타입 오류가 표시됨
// 실수로 놓치는 부분이 없음
```

### 5.4 문서화 효과

```typescript
// Props 인터페이스만 봐도 컴포넌트 사용법을 알 수 있음
interface TodoItemProps {
  id: number;                        // 할 일 ID
  content: string;                   // 할 일 내용
  isDone: boolean;                   // 완료 여부
  createdDate: number;               // 생성 시간
  onUpdate: (id: number) => void;    // 업데이트 함수
  onDelete: (id: number) => void;    // 삭제 함수
}
```

### 5.5 버그 조기 발견

**JSX:**
```javascript
// 런타임에 오류 발견
const onUpdate = (targetId) => {
  setTodo(todo.map((it) => {
    return it.idd === targetId ? {...it, isDone: !it.isDone} : it
    // ❌ idd는 오타 (id가 맞음) - 런타임에서만 발견
  }))
}
```

**TSX:**
```typescript
// 작성 시점에 오류 발견
const onUpdate = (targetId: number) => {
  setTodo(todo.map((it: Todo) => {
    return it.idd === targetId ? {...it, isDone: !it.isDone} : it
    // ❌ 컴파일 에러: 'idd'는 Todo에 존재하지 않음
  }))
}
```

### 5.6 협업 효율성

```typescript
// 다른 개발자가 컴포넌트를 사용할 때
<TodoEditor 
  onCreate={handleCreate}  
  // 타입이 맞지 않으면 즉시 오류 표시
  // 어떤 타입의 함수를 전달해야 하는지 명확함
/>
```

---

## 6. 변경 요약표

| 항목 | JSX | TSX |
|------|-----|-----|
| 파일 확장자 | `.jsx` | `.tsx` |
| Props | 구조분해 할당만 | 인터페이스 + 타입 명시 |
| State | `useState()` | `useState<Type>()` |
| Ref | `useRef()` | `useRef<Type>(null)` |
| 이벤트 핸들러 | 매개변수 타입 없음 | `React.EventType<Element>` |
| 함수 매개변수 | 타입 없음 | 타입 명시 필수 |
| 컴파일 | 불필요 | `tsc` 실행 |
| 타입 체크 | 런타임 | 컴파일 타임 |
| 자동완성 | 제한적 | 완벽한 IntelliSense |
| 리팩토링 | 위험함 | 안전함 |

---

## 7. 마이그레이션 체크리스트

- [x] TypeScript 설치 (`typescript`, `typescript-eslint`)
- [x] `tsconfig.json` 생성
- [x] 파일 확장자 변경 (`.jsx` → `.tsx`)
- [x] 공통 타입 정의 (`types.ts`)
- [x] Props 인터페이스 정의
- [x] State 제네릭 타입 추가
- [x] 함수 매개변수 타입 지정
- [x] 이벤트 핸들러 타입 지정
- [x] Ref 타입 지정
- [x] ESLint 설정 업데이트
- [x] 빌드 스크립트 수정

---

## 8. 추천 학습 순서

1. **기본 타입**: `string`, `number`, `boolean`, `array`
2. **Interface & Type**: 객체 타입 정의
3. **제네릭**: `useState<T>`, `useRef<T>`
4. **함수 타입**: 매개변수와 반환값 타입
5. **React 타입**: Props, State, Event
6. **고급 타입**: Union, Intersection, Utility Types

---

## 9. 유용한 TypeScript 패턴

### 9.1 Optional Props
```typescript
interface TodoEditorProps {
  onCreate: (content: string) => void;
  placeholder?: string;  // ? = 선택적 props
}
```

### 9.2 기본값과 함께 타입 지정
```typescript
interface Props {
  count?: number;
}

function Component({ count = 0 }: Props) {
  // count는 항상 number (undefined 불가)
}
```

### 9.3 Union Types
```typescript
type Status = 'pending' | 'completed' | 'cancelled';

interface Todo {
  id: number;
  content: string;
  status: Status;  // 세 가지 값만 허용
}
```

### 9.4 Utility Types
```typescript
// Partial: 모든 속성을 선택적으로
type PartialTodo = Partial<Todo>;

// Pick: 특정 속성만 선택
type TodoPreview = Pick<Todo, 'id' | 'content'>;

// Omit: 특정 속성 제외
type TodoWithoutDate = Omit<Todo, 'createdDate'>;
```

---

## 10. 참고 자료

- [TypeScript 공식 문서](https://www.typescriptlang.org/)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)
- [TypeScript Deep Dive](https://basarat.gitbook.io/typescript/)

---

## 결론

JSX에서 TSX로의 마이그레이션은 다음과 같은 주요 변경사항을 포함합니다:

1. **타입 정의**: 모든 변수, 함수, Props에 타입 명시
2. **인터페이스**: 재사용 가능한 타입 구조 정의
3. **제네릭**: React Hooks에 타입 매개변수 전달
4. **이벤트 타입**: React 이벤트에 정확한 타입 지정
5. **타입 안정성**: 컴파일 시점에 오류 발견

이러한 변경으로 코드의 안정성, 가독성, 유지보수성이 크게 향상됩니다! 🚀

