// Firebase 설정 파일
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase 설정 정보
// 실제 프로젝트에 맞게 수정해야 합니다
const firebaseConfig = {
  apiKey: "AIzaSyAghDXD3zwgzepWmGVZYGDflqM9I5KEhmI",
  authDomain: "router-fire-c702c.firebaseapp.com",
  projectId: "router-fire-c702c",
  storageBucket: "router-fire-c702c.firebasestorage.app",
  messagingSenderId: "945246081629",
  appId: "1:945246081629:web:0d315a8fa185e58f1373b4",
  measurementId: "G-MX13S2DY9E",
};

// Firebase 초기화
const app = initializeApp(firebaseConfig);

// Firestore 데이터베이스 초기화
export const db = getFirestore(app);
export default app;
