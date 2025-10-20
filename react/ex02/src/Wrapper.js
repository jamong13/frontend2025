import React from 'react'

export default function Wrapper({children}) {
    const style= {
        border: '2px solid black',
        padding: '16px',
    };
    return (
    <div style={style}>
        {children}
        {/* children은 react에서 컴포넌트 태그 안쪽에 넣은 요소를 받는 특별한 props */}
    </div>
  )
}
