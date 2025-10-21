import React,{useRef, useState} from 'react'
import UserList2 from './UserList2'
import CreateUser from './CreateUser';

export default function App() {
  const [inputs, setInputs] = useState({
    username:'',
    email:''
  });
  // inputs 상태 : 사용자 이름과 이메일을 객체 형태로 관리
  const {username, email} = inputs;
  const onChange = (e) =>{ // input 변화가 있을 때 호출
    const{name, value} = e.target; 
    // e.target [name] input의 name 속성 따라
    // username 또는 email 키를 동적으로 지정
    setInputs({
      ...inputs,
      [name]:value
    });
  }
  // users
  const [users, setUsers] = useState([
        {
            id:1,
            username:'velopert',
            email:'public.velopert@gmail.com'
        },
        {
            id: 2,
            username: 'tester',
            email: 'tester@example.com'
        },
        {
            id: 3,
            username: 'liz',
            email: 'liz@example.com'
        }
    ]);

    // 새로 생성될 Id값을 관리
    const nextId = useRef(4);
    const onCreate = () =>{
      // 나중에 구현할 배열에 항목 추가하는 로직
      const user = {
        id: nextId.current, // useRef값 사용 id 부여
        username,
        email
      }
      setUsers([...users, user]);
      // 기존에 users를 불러오고(복사하고), 새로 만든 user를 추가한다.

      // 초기화
      setInputs({
        username:'',
        email:''
      });
      nextId.current += 1; //다음 id 증가
    }

  return (
    <div>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
        />
      <UserList2 users={users}/>
    </div>
  )
}

//App(state) > props(전달) -> CreateUser(input) -> 이벤트 발생 -> app의 setState()호출

//사용자 입력 -> CreateUser(input)에서 onChange 발생 -> App의 onChange 함수 실행
// -> App의 state 뱐걍(setInputs) -> 새로운 props가 CreateUser로 전달 -> 화면이 최신 상태로 반영
// | 구분                       | 역할                                     |
// | ------------             | -------------------------------------- |
// | `App`                    | 상태(state)와 이벤트 처리 로직을 가짐               |
// | `CreateUser`          | 입력 UI를 렌더링하고, 이벤트 발생 시 부모(App)의 함수를 호출 |
// | 이벤트 전달 방식    | “함수를 props로 전달”하는 것                    |
// | 데이터 흐름           | 부모 → 자식 (props), 자식 → 부모 (함수 호출)       |
