import React, { useState,useRef } from 'react'
import './App.css';
import Header from './component/Header';
import TodoEditor from './component/TodoEditor';
import TodoList from './component/TodoList';

const mockTodo = [
  {
    id:0,
    isDone : false,
    content:"react 공부하기",
    createdDate : new Date().getTime(),
  },
    {
    id: 1,
    isDone: false,
    content: "빨래 널기",
    createdDate: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "노래 연습하기",
    createdDate: new Date().getTime(),
  },

]



export default function App() {
  const [todo, setTodo] = useState(mockTodo);
  const idRef =useRef(3);

  const onCreate = (content) => {
    const newItem = {  
      id:idRef.current,
      content,
      isDone : false,
      createdDate: new Date().getTime(),
     }
     setTodo([newItem, ...todo]);
     idRef.current += 1;
  };

const onUpdate = (targetId) => {
  //targetId 는 클릭된 Todo 고유 id로 전달
  setTodo(todo.map((it)=>{
    //if(it.id === targetId){//순회 기존 it.id 와 targetId 같은지 확인
    //  return {...it,//전개연산  기존다른속성(content,date,createdDate)등은 유지
   //     isDone:!it.isDone} //isDone 값을 반전(false-> true, true->false))
   // }else{
  //    return it;
  //  }
  return  it.id === targetId ? {...it, isDone : !it.isDone} : it

    //{id:1, content:"빨래하기",isDone:false} //기존
    //{id:1, content:"빨래하기",isDone:true //update 실행후
  }))
}
const onDelete = (targetId) =>{
  setTodo(todo.filter((it) => it.id !== targetId));
};


  return (
    <div className='App'>
        <Header />
        <TodoEditor onCreate = {onCreate}/>
        <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete}/>
    </div>
  )
}
