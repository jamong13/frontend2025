import React, { useState, useCallback } from "react";
// ## 문제 8: useCallback 기본 사용
// 아래 코드에서 자식 컴포넌트에 전달되는 `handleClick` 함수를 메모이제이션하여 불필요한 재렌더링을 방지하세요. `???`를 채워주세요.

// ```jsx
// import React, { useState, ??? } from 'react';

// function Parent() {
//   const [count, setCount] = useState(0);

//   const handleClick = ???(() => {
//     console.log('클릭됨!');
//   }, []);

//   return (
//     <div>
//       <p>카운트: {count}</p>
//       <button onClick={() => setCount(count + 1)}>증가</button>
//       <Child onClick={handleClick} />
//     </div>
//   );
// }

// function Child({ onClick }) {
//   return <button onClick={onClick}>클릭</button>;
// }

export default function App() {
  const question = `
  import React, { useState, ??? } from 'react';

  function Parent() {
    const [count, setCount] = useState(0);
    
    const handleClick = ???(() => {
      console.log('클릭됨!');
    }, []);
    
    return (
      <div>
        <p>카운트: {count}</p>
        <button onClick={() => setCount(count + 1)}>증가</button>
        <Child onClick={handleClick} />
      </div>
    );
  }

  function Child({ onClick }) {
    return <button onClick={onClick}>클릭</button>;
  }
   `;
  const answer = `
  import React, { useState, useCallback } from 'react';

  function Parent() {
    const [count, setCount] = useState(0);
    
    const handleClick = useCallback(() => {
      console.log('클릭됨!');
    }, []);
    
    return (
      <div>
        <p>카운트: {count}</p>
        <button onClick={() => setCount(count + 1)}>증가</button>
        <Child onClick={handleClick} />
      </div>
    );
  }

  function Child({ onClick }) {
    return <button onClick={onClick}>클릭</button>;
  }
  `;

  function Parent() {
    const [count, setCount] = useState(0);

    const handleClick = useCallback(() => {
      console.log("클릭됨!");
    }, []);

    return (
      <div>
        <p>카운트: {count}</p>
        <button onClick={() => setCount(count + 1)}>증가</button>
        <Child onClick={handleClick} />
      </div>
    );
  }

  function Child({ onClick }) {
    return <button onClick={onClick}>클릭</button>;
  }

  return (
    <div>
      <div>
        <div>
          <p>
            ## 문제 8: useCallback 기본 사용
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
      <Parent />
      <div>
        <p>답: </p>
        <pre>
          <code>{answer}</code>
        </pre>
      </div>
    </div>
  );
}
