import React, { createContext, useContext } from "react";

// ## 문제 5: useContext 기본 사용
// 아래 코드에서 `ThemeContext`를 사용하여 테마를 가져오려면 `???`를 어떻게 채워야 하나요?

// ```jsx
// import React, { createContext, useContext } from 'react';

// const ThemeContext = createContext('light');

// function App() {
//   return (
//     <ThemeContext.Provider value="dark">
//       <Child />
//     </ThemeContext.Provider>
//   );
// }
// function Child() {
//   const theme = ???(???);

//   return <div>현재 테마: {theme}</div>;
// }

export default function App() {
  const question = `
  import React, { createContext, useContext } from 'react';

  const ThemeContext = createContext('light');

  function App() {
    return (
    <ThemeContext.Provider value="dark">
    <Child />
    </ThemeContext.Provider>
    );
  }
  function Child() {
  const theme = ???(???);

  return <div>현재 테마: {theme}</div>;
  }`;
  const answer = ``;

  return (
    <div>
      <div>
        <div>
          <p>
            아직 안 배움 ## 문제 5: useContext 기본 사용
            <br />
            // 아래 코드에서 `ThemeContext`를 사용하여 테마를 가져오려면 `???`를
            어떻게 채워야 하나요?
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
