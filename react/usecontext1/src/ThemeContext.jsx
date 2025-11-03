import React from "react";
import { createContext } from "react";

export const ThemeContext = createContext(null);
// App -> Parent -> Child -> Button
// 중간 컴포넌트들이 쓸데없이 props를 계속 전달해야 함 -> props drilling 문제
// createContext 사용하면
// App -> (Context) -> Button으로 중간 단계를 건너뛰고 원하는 컴포넌트에 데이터 사용

// context 생성 -> provider 설정 -> useContext 사용
// 실제 쓰는 곳 -> 로그인 상태 저장, 다크 모드/테마, 다국어, 쇼핑몰(장바구니 데이터)
