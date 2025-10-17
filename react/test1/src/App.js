import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  return(
    <>
      <div className='container'>
        <h1 className='heading'>리액트 카운터 예제</h1>
        <p className='count'>현재 카운트 : { count }</p>
        <div className='buttons'>
          <button className='btn' onClick={()=>setCount(count+1)}>+1증가</button>
          <button className='btn' onClick={()=>setCount(count-1)}>-1증가</button>
        </div>
      </div>
    </>
  );
}

export default App;
