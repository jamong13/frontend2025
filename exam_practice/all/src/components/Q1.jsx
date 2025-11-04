import React, { useState } from "react";

// ## 문제 1: useState 기초
// 현재 카운터의 값이 `0`입니다. 버튼을 클릭하면 카운터가 1씩 증가해야 합니다. 아래 코드에서 `???`로 표시된 부분을 채워주세요.

// ```jsx
// import React from 'react';

// function Counter() {
//   const [count, ???] = ???(???);

//   return (
//     <div>
//       <p>현재 카운터: {count}</p>
//       <button onClick={() => ???(count + 1)}>증가</button>
//     </div>
//   );
// }

// export default Counter;
// ```
export default function Q1() {
  function Counter() {
    const [count, setCount] = useState(0);

    return (
      <div>
        <p>현재 카운터: {count}</p>
        <button onClick={() => setCount(count + 1)}>증가</button>
      </div>
    );
  }
  const question = `
  import React from 'react';
    function Counter() {
    const [count, ???] = ???(???);
    return (
        <div>
            <p>현재 카운터: {count}</p>
            <button onClick={() => ???(count + 1)}>증가</button>
        </div>
        );
    }`;
  const answer = `
  setCount
  useState
  0
  setCount`;
  return (
    <div>
      <div>
        <div>
          <p>
            ## 문제 1: useState 기초 <br />
            현재 카운터의 값이 `0`입니다. 버튼을 클릭하면 카운터가 1씩 증가해야
            합니다. 아래 코드에서 `???`로 표시된 부분을 채워주세요.
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
      <Counter />

      <div>
        <p>답: </p>
        <pre>
          <code>{answer}</code>
        </pre>
      </div>
    </div>
  );
}
