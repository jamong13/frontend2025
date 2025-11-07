import { createContext, useContext, useState } from "react";

// Context 생성
const AppContext = createContext();

// Context Provider 컴포넌트
export default function AppProvider({ children }) {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({ name: "홍길동", age: 25 });

  const incrementCount = () => setCount(count + 1);
  const decrementCount = () => setCount(count - 1);
  const resetCount = () => setCount(0);

  const updateUserName = (name) => setUser({ ...user, name });
  const updateUserAge = (age) => setUser({ ...user, age });

  const value = {
    count,
    user,
    incrementCount,
    decrementCount,
    resetCount,
    updateUserName,
    updateUserAge,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

// Custom Hook for using context
export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within AppProvider");
  }
  return context;
}
