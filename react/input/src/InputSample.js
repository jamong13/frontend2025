import React, { useState } from 'react'

export default function InputSample() {
  const [text, setText] = useState('');
  // useState('') 초깃값
  // text 현재값
  // setText 변경값

  // e 이벤트 객체 => 파라미터 받아옴
  // e.target 현재 이벤트가 발생하는 dom(input)
  // e.target.value input창에 써지는 글씨값을 받아옴
  const onChange = (e) => {
    setText(e.target.value);
  };
  const onReset = () => {
    setText('');
    // e.target.value를 조회하면 현재 input의 value값을 알 수 있다
  };
  return (
    <div>
      <input onChange={onChange} value={text}/>
      <button onClick={onReset}>초기화</button>
      <div>
          <b>값 : {text}</b>
      </div>
    </div>
  )
}
