import React, { useEffect } from "react";

export default function FixAnimation({ visible, onFinished }) {
  useEffect(() => {
    // 1. 조건 확인
    if (!visible) {
      return;
    }
    // 2. 타이머 설정
    const timer = window.setTimeout(() => {
      // 3. 2초 후에 onFinished 콜백함수
      onFinished?.();
      //  옵셔닝 체이닝으로 안전하게 호출
    }, 3200);
    // 클린업 함수 - 컴포넌트가 언마운트 되거나 의존성이 변경될 때 실행
    // 설정한 타이머를 취소하여 메모리 누수 방지
    return () => window.clearTimeout(timer);
  }, [visible, onFinished]);
  //  visible = true, onFineshed = 함수
  // Effect가 실행, 타이머 설정

  // visible 변경 => false
  //  클린업 함수 실행 (타이머 취소)
  //  effect 재실행 (타이머 설정 안함)
  if (!visible) {
    return null;
  }
  return (
    <div id="fix-animation" aria-hidden={!visible}>
      <h1 className="fix-text">more than expected!</h1>
      <div className="text-blind">
        <div className="blind1" />
        <div className="blind2" />
      </div>
      <div className="circle-ani">
        <div className="circle1"></div>
        <div className="circle2"></div>
        <div className="circle3"></div>
        <div className="circle4"></div>
      </div>
    </div>
  );
}
