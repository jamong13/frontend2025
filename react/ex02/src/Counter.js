import React, { useState } from 'react'

export default function Counter() {

  const [number, setNumber] = useState(0);
  // 동적 state 상태를 관리하는 useState
  // number 현재값
  // 상태 업데이트가 연속으로 일어나는 경우, 비동기적으로 업데이트되면 예기치 않은 값이 나올 수 있음.

  const onIncrease = () =>{
    // setNumber(number+1);
    setNumber(prevNumber => prevNumber+1);
  } 
  const onDecrease = () =>{
    // setNumber(number-1);
    //함수형 업데이트
    setNumber(prevNumber => prevNumber-1);
  } 
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  )
}
