import React from 'react'
import './TodoItem.css'

interface TodoItemProps {
  id: number;
  content: string;
  isDone: boolean;
  createdDate: number;
  onUpdate: (id: number) => void;
  onDelete: (id: number) => void;
}

export default function TodoItem({ id, content, isDone, createdDate, onUpdate, onDelete }: TodoItemProps) {
  //  구조분해 할당 onupdate 추가 

  const onChangeCheckbox = () => {
    onUpdate(id);
  };

  const onClickDelete = () => {
    onDelete(id);
  };

  return (
    <div className='TodoItem'>
      <div className="checkbox_col">
        <input type="checkbox" checked={isDone}
          onChange={onChangeCheckbox}
        // 체크했을때 호출할 함수 onChangeCheckbox는 
        //onUpadte 호출하고 인수는 현재 클릭한 할일 아이템 id전달
        />
      </div>
      <div className="title_col">{content}</div>
      <div className="date_col">
        {new Date(createdDate).toLocaleDateString()}</div>
      <div className="btn_col">
        <button onClick={onClickDelete}>삭제</button>
      </div>
    </div>
  )
}

