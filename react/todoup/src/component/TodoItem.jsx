import React from 'react'
import './TodoItem.css'

export default function TodoItem({id, content, isDone, createdDate, onUpdate, onDelete}) {
  // 구조분해 할당 onUpdate 추가
  const onChangeCheckBox = () => {
    onUpdate(id);
  };
  const onClickDelete = () => {
    onDelete(id);
  };
  return (
    <div className='TodoItem'>
      <div className='checkbox_col'>
        <input type='checkbox' checked={isDone}
        onChange={onChangeCheckBox}
        // 체크했을 때 호출할 함수 onChangeCheckBox는 onUpdate 호출하고
        // 인수는 현재 클릭한 할일 아이템 id 전달
        />
      </div>
      <div className='title_col'>{content}</div>
      <div className='date_col'>
        {new Date(createdDate).toLocaleDateString()}
      </div>
      <div className='btn_col'>
        <button onClick={onClickDelete}>삭제</button>
      </div>
    </div>
  )
}
