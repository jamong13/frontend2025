import MainContent from "./components/MainContent";
import Header from "./components/Header";
import "./App.css";
export default function App() {
  return (
    <div className="app">
      <Header />
      <MainContent />
    </div>
  );
}
// redux란?
// 앱 전체가 공유하는 데이터 창고
// 어디서든 데이터를 읽고(useSelector) 변경 (dispatch)할 수 있다.
// 처리 속도 빠름

// 언제 사용?
// Props를 3단계 이상 전달, 컴포넌트 50개 이상
// 핵심 개념
// Store (창고) + useSelector(읽기) + dispatch(쓰기)
