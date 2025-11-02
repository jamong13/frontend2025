import React, { useState } from "react";
// ## 문제 6: useState 함수형 업데이트
// 아래 코드에서 클릭 이벤트 핸들러에서 `???`를 사용하여 상태를 업데이트해야 합니다. 함수형 업데이트를 사용해서 작성하세요.

// ```jsx
// import React, { useState } from 'react';

// function DoubleCounter() {
//   const [count, setCount] = useState(0);

//   const handleClick = () => {
//     ???((prev) => prev + 1);
//     ???((prev) => prev + 1);
//   };

//   return (
//     <div>
//       <p>카운트: {count}</p>
//       <button onClick={handleClick}>두 번 증가</button>
//     </div>
//   );
// }

export default function App() {
  const question = `
   import React, { useState } from 'react';

  function DoubleCounter() {
    const [count, setCount] = useState(0);

    const handleClick = () => {
      ???((prev) => prev + 1);
      ???((prev) => prev + 1);
  };

  return (
    <div>
      <p>카운트: {count}</p>
      <button onClick={handleClick}>두 번 증가</button>
    </div>
    );
  }`;
  const answer = `
  import React, { useState } from 'react';

  function DoubleCounter() {
    const [count, setCount] = useState(0);
      const handleClick = () => {
      ???((prev) => prev + 1);
      ???((prev) => prev + 1);
    };

    return (
      <div>
        <p>카운트: {count}</p>
        <button onClick={handleClick}>두 번 증가</button>
      </div>
      );
  }
  **설명:**
  함수형 업데이트를 사용하면 이전 상태 값을 기반으로 상태를 업데이트할 수 있습니다. 
  두 번의 setCount 호출이 모두 이전 값을 기준으로 계산되므로 최종적으로 2가 증가합니다.`;
  function DoubleCounter() {
    const [count, setCount] = useState(0);

    const handleClick = () => {
      setCount((prev) => prev + 1);
      setCount((prev) => prev + 1);
    };

    return (
      <div>
        <p>카운트: {count}</p>
        <button onClick={handleClick}>두 번 증가</button>
      </div>
    );
  }
  return (
    <div>
      <div>
        <div>
          <p>
            ## 문제 6: useState 함수형 업데이트
            <br />
            아래 코드에서 클릭 이벤트 핸들러에서 `???`를 사용하여 상태를
            업데이트해야 합니다. 함수형 업데이트를 사용해서 작성하세요.
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
      <DoubleCounter />
      <div>
        <p>답: </p>
        <pre>
          <code>{answer}</code>
        </pre>
      </div>
    </div>
  );
}
