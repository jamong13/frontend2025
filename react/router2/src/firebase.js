// Firebase 설정 파일
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase 설정 정보
// 실제 프로젝트에 맞게 수정해야 합니다
const firebaseConfig = {
  apiKey: "AIzaSyC75V-0r-icK97ca07L0WdEmo5zqu_nUYg",
  authDomain: "router2-9fc5a.firebaseapp.com",
  projectId: "router2-9fc5a",
  storageBucket: "router2-9fc5a.firebasestorage.app",
  messagingSenderId: "1015523545323",
  appId: "1:1015523545323:web:b8b2c61f6b20db9df8eeae",
  measurementId: "G-ZMSTDK2KGC",
};

// Firebase 초기화
const app = initializeApp(firebaseConfig);

// Firestore 데이터베이스 초기화
export const db = getFirestore(app);
export default app;
