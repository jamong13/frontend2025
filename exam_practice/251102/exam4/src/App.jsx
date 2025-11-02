import React, { useRef, useEffect } from "react";
// ## 문제 4: useRef 사용법
// 아래 코드에서 입력 필드가 화면에 그려질 때 자동으로 포커스가 되도록 하려면 `???`를 어떻게 채워야 하나요?

// ```jsx
// import React, { useRef, useEffect } from 'react';

// function AutoFocus() {
//   const inputRef = ???;

//   useEffect(() => {
//     ???.focus();
//   }, []);

//   return <input ref={???} type="text" placeholder="자동으로 포커스됩니다" />;
// }
// ```
export default function App() {
  const question = `
import React, { useRef, useEffect } from 'react';

function AutoFocus() {
  const inputRef = ???;
  
  useEffect(() => {
    ???.focus();
  }, []);
  
  return <input ref={???} type="text" placeholder="자동으로 포커스됩니다" />;
}`;
  const answer = `
  import React, { useRef, useEffect } from 'react';
  function AutoFocus() {
    const inputRef = useRef(null);

    useEffect(() => {
      inputRef.current.focus();
    }, []);

    return (
      <input ref={inputRef} type="text" placeholder="자동으로 포커스됩니다" />
    );
  }`;
  function AutoFocus() {
    const inputRef = useRef(null);

    useEffect(() => {
      inputRef.current.focus();
    }, []);

    return (
      <input ref={inputRef} type="text" placeholder="자동으로 포커스됩니다" />
    );
  }
  return (
    <div>
      <div>
        <div>
          <p>
            ## 문제 4: useRef 사용법
            <br />
            아래 코드에서 입력 필드가 화면에 그려질 때 자동으로 포커스가 되도록
            하려면 ???를 어떻게 채워야 하나요?
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
      <AutoFocus />

      <div>
        <p>답: </p>
        <pre>
          <code>{answer}</code>
        </pre>
      </div>
    </div>
  );
}
