import React, { useState } from 'react'
import './TodoList.css';
import TodoItem from './TodoItem';

export default function TodoList({todo, onUpdate, onDelete}) {
  const [search, setSearch] = useState('');
  // useState 리액트훅을 만든다. - search 검색 단어를 관리
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
    // 검색폼의 value (타이핑치는 글자) State변수 search(검색단어)를 설정
  }
  const getSearchResult = () => {
    return search === ''? todo : todo.filter((it) => it.content.toLowerCase().includes(search.toLowerCase()));
    // search === '' ? todo 검색 단어가 없으면 todo prop 자체를 리턴
    // 검색단어가 있으면 it 항목에 search에 저장되어 있는 (단어)가 포함되어 있으면 it(레코드)를 리턴
    // ① 함수 getSearchResult는 현재 입력한 검색어인 search가 빈 문자열("")이면 todo를 그대로 반환하고,
    // 그렇지 않으면 todo 배열에서 search의 내용과 일치하는 아이템만 필터링해 반환합니다. 
  };
  return (
    <div className='TodoList'>
      <h4>Todo List🌱</h4>

      <input
        className='searchbar'
        placeholder='검색어를 입력하세요'
        onChange={onChangeSearch}
        // 검색 폼의 onChange 이벤트 핸들러 onChangeSearch 만듦
        value={search}
      />
      <div className='list_wrapper'>
        {getSearchResult().map((it)=>(
          <TodoItem key={it.id} {...it} onUpdate={onUpdate} onDelete={onDelete}/>
          // 전개연산 spread 연산
          // <TodoItem key={it.id} id={it.id} content={it.content} isDone={it.isDone} createdDate={it.createdDate}/>
        ))}
        {/* ...it 이 부분은 전개 연산자(Spread Operator) */}
        {/* 객체의 속성을 펼쳐서 자식 컴포넌트 (TodoItem)으로 전달하는 역할 */}
      </div>
    </div>
  )
}
