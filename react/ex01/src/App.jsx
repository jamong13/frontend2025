import React from 'react'
import Hello from './Hello'
import Wrapper from './Wrapper'
export default function App() {
  return (
    <Wrapper>
      <Hello name="react" color="red" isSpecial={true} />
      {/* isSpecial = {true} isSpecial  */}
      {/* true, false 자바스크립트 값이므로 중괄호 */}
      {/* Hello 컴포넌트를 사용할 때 name이라는 값을 전달하고 싶다고 가정 */}
      <Hello color='pink' />
    </Wrapper>
  )
}
