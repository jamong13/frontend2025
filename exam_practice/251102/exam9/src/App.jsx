import React, { useState, useEffect } from "react";
// ## 문제 9: useEffect로 API 호출
// 아래 코드에서 컴포넌트가 마운트될 때 API를 호출하여 데이터를 가져오도록 `???`를 채워주세요.

// ```jsx
// import React, { useState, useEffect } from 'react';

// function UserProfile() {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   ???(() => {
//     fetch('https://api.example.com/user')
//       .then(res => res.json())
//       .then(data => {
//         ???(data);
//         ???(false);
//       });
//   }, []);

//   if (loading) return <div>로딩 중...</div>;
//   return <div>사용자: {user?.name}</div>;
// }ton onClick={onClick}>클릭</button>;
// }

export default function App() {
  const question = `
  import React, { useState, useEffect } from 'react';

  function UserProfile() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    ???(() => {
      fetch('https://api.example.com/user')
        .then(res => res.json())
        .then(data => {
          ???(data);
          ???(false);
        });
    }, []);
    
    if (loading) return <div>로딩 중...</div>;
    return <div>사용자: {user?.name}</div>;
  }
   `;
  const answer = `
  import React, { useState, useEffect } from 'react';
  
  function UserProfile() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      fetch("https://api.example.com/user")
        .then((res) => res.json())
        .then((data) => {
          setUser(data);
          setLoading(false);
        });
    }, []);

    if (loading) return <div>로딩 중...</div>;
    return <div>사용자: {user?.name}</div>;
  }
  `;

  function UserProfile() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      fetch("https://api.example.com/user")
        .then((res) => res.json())
        .then((data) => {
          setUser(data);
          setLoading(false);
        });
    }, []);

    if (loading) return <div>로딩 중...</div>;
    return <div>사용자: {user?.name}</div>;
  }

  return (
    <div>
      <div>
        <div>
          <p>
            ## 문제 9: useEffect로 API 호출
            <br />
            아래 코드에서 자식 컴포넌트에 전달되는 `handleClick` 함수를
            메모이제이션하여 불필요한 재렌더링을 방지하세요. `???`를 채워주세요.
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
      <UserProfile />
      <div>
        <p>답: </p>
        <pre>
          <code>{answer}</code>
        </pre>
      </div>
    </div>
  );
}
