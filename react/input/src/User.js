import React, {useEffect} from 'react'

export default function User({user, onRemove, onToggle}) {
  useEffect(() => { // 마운트됨
    console.log('user 값이 설정됨');
    console.log(user);
    return () => { // 언마운트될 때(사라질 때 실행) -> 클린업 함수
      console.log('user 가 바뀌기 전');
      // return () => {}; 소멸 클린업
    };
  }, [user]);
  return (
    <div>
        <b style={{
          cursor:'pointer',
          color:user.active ? 'green' : 'black'
        }} onClick={() => onToggle(user.id)}>
            {user.username}
          </b>
        <span>({user.email})</span>
        <button onClick={()=> onRemove(user.id)}>삭제</button>
    </div>
  )
}
