import React, { useEffect, useState } from "react";

// ## 문제 2: useEffect 실행 조건
// 아래 코드에서 콘솔에 "마운트되었습니다!"가 출력되는 조건을 설명하고, 의존성 배열에 숫자 `1`을 추가하면 어떻게 되는지 설명하세요.

// ```jsx
// import React, { useEffect, useState } from 'react';

// function MyComponent() {
//   const [num, setNum] = useState(0);

//   useEffect(() => {
//     console.log('마운트되었습니다!');
//   }, []); // 빈 배열

//   return (
//     <div>
//       <button onClick={() => setNum(num + 1)}>클릭: {num}</button>
//     </div>
//   );
// }
// ```
export default function App() {
  const question = `import React, { useEffect, useState } from 'react';
    function MyComponent() {
      const [num, setNum] = useState(0);

      useEffect(() => {
      console.log('마운트되었습니다!');
    }, []); // 빈 배열

    return (
    <div>
      <button onClick={() => setNum(num + 1)}>클릭: {num}</button>
    </div>
    );
}`;
  function MyComponent() {
    const [num, setNum] = useState(0);

    useEffect(() => {
      console.log("마운트되었습니다!");
    }, []); // 빈 배열

    return (
      <div>
        <button onClick={() => setNum(num + 1)}>클릭: {num}</button>
      </div>
    );
  }
  return (
    <div>
      <p>
        ## 문제 2 : 아래 코드에서 콘솔에 "마운트되었습니다!"가 출력되는 조건을
        설명하고, 의존성 배열에 숫자 `1`을 추가하면 어떻게 되는지 설명하세요.
      </p>
      <pre>
        <code>{question}</code>
      </pre>
      <MyComponent />
      <p className="my-answer">
        답 : 빈 배열이 들어갔을 경우 컴포넌트가 처음 마운트될 때만 useEffect가
        실행된다. 의존성 배열에 1을 추가해도, 첫 마운트 시에만 실행되고,
        useEffect는 num값의 변화가 반영되지 않기 때문에 num값이 변경되어도
        콘솔창에 문구가 출력되지 않는다.
      </p>
      <br />
      <p className="t-answer">
        정답 : 빈 배열은 컴포넌트가 처음 마운트될 때만 useEffect가 실행됩니다.
        의존성 배열에 1을 추가하면 useEffect는 마운트 시에만 실행되고, num 값이
        변경되어도 "마운트되었습니다!"는 출력되지 않습니다. (num과 1은 항상 같지
        않으므로 의존성이 변경되었다고 감지되지 않음)
      </p>
    </div>
  );
}
