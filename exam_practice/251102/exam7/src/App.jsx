import React, { useState, useMemo } from "react";

//## 문제 7: useMemo 기본 사용
// 아래 코드에서 `expensiveValue`는 값비싼 계산을 수행합니다. `number`가 변경될 때만 재계산하도록 `???`를 사용하여 최적화하세요.

// import React, { useState, ??? } from 'react';

// function ExpensiveComponent() {
//   const [number, setNumber] = useState(0);
//   const [toggle, setToggle] = useState(false);

//   const expensiveValue = ???(() => {
//     console.log('비용이 많이 드는 계산 실행');
//     return number * number;
//   }, [???]);

//   return (
//     <div>
//       <p>결과: {expensiveValue}</p>
//       <button onClick={() => setNumber(number + 1)}>숫자 증가: {number}</button>
//       <button onClick={() => setToggle(!toggle)}>토글</button>
//     </div>
//   );
// }

export default function App() {
  const question = `
  import React, { useState, ??? } from 'react';

  function ExpensiveComponent() {
    const [number, setNumber] = useState(0);
    const [toggle, setToggle] = useState(false);
    
    const expensiveValue = ???(() => {
      console.log('비용이 많이 드는 계산 실행');
      return number * number;
    }, [???]);
    
    return (
      <div>
        <p>결과: {expensiveValue}</p>
        <button onClick={() => setNumber(number + 1)}>숫자 증가: {number}</button>
        <button onClick={() => setToggle(!toggle)}>토글</button>
      </div>
    );
  }
   `;
  const answer = `
  import React, { useState, useMemo } from "react";

  function ExpensiveComponent() {
    const [number, setNumber] = useState(0);
    const [toggle, setToggle] = useState(false);

    const expensiveValue = useMemo(() => {
      console.log("비용이 많이 드는 계산 실행");
      return number * number;
    }, [number]);

    return (
      <div>
        <p>결과: {expensiveValue}</p>
        <button onClick={() => setNumber(number + 1)}>
          숫자 증가: {number}
        </button>
        <button onClick={() => setToggle(!toggle)}>토글</button>
      </div>
    );
  }
  `;
  function ExpensiveComponent() {
    const [number, setNumber] = useState(0);
    const [toggle, setToggle] = useState(false);

    const expensiveValue = useMemo(() => {
      console.log("비용이 많이 드는 계산 실행");
      return number * number;
    }, [number]);

    return (
      <div>
        <p>결과: {expensiveValue}</p>
        <button onClick={() => setNumber(number + 1)}>
          숫자 증가: {number}
        </button>
        <button onClick={() => setToggle(!toggle)}>토글</button>
      </div>
    );
  }
  return (
    <div>
      <div>
        <div>
          <p>
            ## 문제 7: useMemo 기본 사용
            <br />
            아래 코드에서 `expensiveValue`는 값비싼 계산을 수행합니다.
            `number`가 변경될 때만 재계산하도록 `???`를 사용하여 최적화하세요.
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
      <ExpensiveComponent />
      <div>
        <p>답: </p>
        <pre>
          <code>{answer}</code>
        </pre>
      </div>
    </div>
  );
}
