import React, { useState } from 'react'
import './TodoList.css';
import TodoItem from './TodoItem';
import { Todo } from '../types';

interface TodoListProps {
  todo: Todo[];
  onUpdate: (id: number) => void;
  onDelete: (id: number) => void;
}

export default function TodoList({ todo, onUpdate, onDelete }: TodoListProps) {
  const [search, setSearch] = useState<string>("");
  //useState 리액트훅을 만든다. - search 검색단어를 관리

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    console.log(e.target.value);
    //검색폼의 value (타이핑치는 글자) State변수 search(검색단어)를 설정
  }

  const getSearchResult = (): Todo[] => {
    return search === "" ? todo : todo.filter((it) => it.content.toLowerCase().includes(search.toLowerCase()));
    //search === "" ? todo  검색단어가 없으면  todo prop 자체를 리턴
    //검색단어가 있으면 it 항목에 search에 저장되있는 (단어) 포함되 있으면 it(레코드)을 리턴
  };

  return (
    <div className='TodoList'>
      <h4>Todo LIst 🌱</h4>
      <input
        className="searchbar"
        placeholder="검색어를 입력하세요"
        onChange={onChangeSearch}
        // 검색 폼의 onChange 이벤트 핸들러  onChangeSearch만듬
        value={search}
      />

      <div className='list_wrapper'>
        {getSearchResult().map((it) => (
          // getSearchResult() 함수 호출해서 결과값을 map으로 반복
          <TodoItem key={it.id} {...it} onUpdate={onUpdate} onDelete={onDelete} />
          // <TodoItem key={it.id} id={it.id} content={it.content} isDone={it.isDone} createdDate={it.createdDate} />
        ))}
        {/* ...it 이부분은 전개 연산자(Spread Operator) */}
        {/* 객체의 속성을 펼쳐서 자식 컴포넌트 (TodoItem)로 전달하는역할 */}
      </div>
    </div>
  )
}

