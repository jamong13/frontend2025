import React, { useEffect, useState } from "react";

// ## 문제 3: useEffect 클린업
// 아래 코드에서 타이머를 사용하여 "카운트다운: 5"에서 0까지 카운트하고,
// 컴포넌트가 언마운트되거나 카운트가 0에 도달했을 때 타이머를 정리해야 합니다. `???`를 채워주세요.

// ```jsx
// import React, { useEffect, useState } from 'react';

// function Countdown() {
//   const [count, setCount] = useState(5);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       ???;
//     }, 1000);

//     return () => {
//       ???;
//     };
//   }, [count]);

//   return <div>카운트다운: {count}</div>;
// }
// ```

export default function App() {
  const question = `import React, { useEffect, useState } from 'react';
  function Countdown() {
  const [count, setCount] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
    ???;
  }, 1000);

  return () => {
    ???;
  }, [count]);

  return <div>카운트다운: {count}</div>;`;

  const answer = `function Countdown() {
    const [count, setCount] = useState(5);

    useEffect(() => {
      const timer = setInterval(() => {
        setCount((num) => {
          if (num <= 0) {
            clearInterval(timer);
            return 0;
          }
          return num - 1;
        });
      }, 1000);

      return () => {
        clearInterval(timer);
      };
    }, [count]);

    return <div>카운트다운: {count}</div>;
  }`;
  function Countdown() {
    const [count, setCount] = useState(5);

    useEffect(() => {
      const timer = setInterval(() => {
        setCount((num) => {
          if (num <= 0) {
            clearInterval(timer);
            return 0;
          }
          return num - 1;
        });
      }, 1000);

      return () => {
        clearInterval(timer);
      };
    }, [count]);

    return <div>카운트다운: {count}</div>;
  }
  return (
    <div>
      <div>
        <p>
          ## 문제 3: useEffect 클린업 아래 코드에서 타이머를 사용하여
          "카운트다운: 5"에서 0까지 카운트하고, 컴포넌트가 언마운트되거나
          카운트가 0에 도달했을 때 타이머를 정리해야 합니다. `???`를 채워주세요.
        </p>
        <pre>
          <code>{question}</code>
        </pre>
      </div>

      <div style={{ fontSize: "40px" }}>
        <Countdown />
      </div>

      <div>
        <p>답:</p>
        <pre>
          <code>{answer}</code>
        </pre>
      </div>
    </div>
  );
}
