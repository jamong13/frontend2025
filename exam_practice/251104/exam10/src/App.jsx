import React, { createContext, useContext, useState } from "react";

// ## 문제 10: useContext와 Provider
// 아래 코드에서 `UserContext`를 사용하여 사용자 정보를 공유하도록 `???`를 채워주세요.

// ```jsx
// import React, { createContext, useContext, useState } from 'react';

// const UserContext = ???(null);

// function App() {
//   const [user, setUser] = useState({ name: '홍길동', age: 25 });

//   return (
//     <UserContext.??? value={{ user, setUser }}>
//       <Profile />
//     </UserContext.???>
//   );
// }

// function Profile() {
//   const { user } = ???(???);

//   return (
//     <div>
//       <p>이름: {user.name}</p>
//       <p>나이: {user.age}</p>
//     </div>
//   );
// }

export default function App() {
  const [user, setUser] = useState({ name: "홍길동", age: 25 });
  const question = `
   import React, { createContext, useContext, useState } from 'react';

  const UserContext = ???(null);

  function App() {
    const [user, setUser] = useState({ name: '홍길동', age: 25 });
    
    return (
      <UserContext.??? value={{ user, setUser }}>
        <Profile />
      </UserContext.???>
    );
  }

  function Profile() {
    const { user } = ???(???);
    
    return (
      <div>
        <p>이름: {user.name}</p>
        <p>나이: {user.age}</p>
      </div>
    );
  }`;
  const answer = `
  createContext
  Provider
  Provider
  useContext
  UserContext
  `;
  const UserContext = createContext(null);

  function Profile() {
    const { user } = useContext(UserContext);

    return (
      <div>
        <p>이름: {user.name}</p>
        <p>나이: {user.age}</p>
      </div>
    );
  }
  return (
    <div>
      <div>
        <div>
          <p>
            ## 문제 10: useContext와 Provider
            <br />
            아래 코드에서 `UserContext`를 사용하여 사용자 정보를 공유하도록
            `???`를 채워주세요.
          </p>
          <br />
          <p>
            해당 코드 : <br />
          </p>
          <pre>
            <code>{question}</code>
          </pre>
        </div>
      </div>
      <UserContext.Provider value={{ user, setUser }}>
        <Profile />
      </UserContext.Provider>
      <div>
        <p>답: </p>
        <pre>
          <code>{answer}</code>
        </pre>
      </div>
    </div>
  );
}
