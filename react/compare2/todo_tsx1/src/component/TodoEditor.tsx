import React, { useState, useRef } from 'react'
import "./TodoEditor.css";

interface TodoEditorProps {
  onCreate: (content: string) => void;
}

export default function TodoEditor({ onCreate }: TodoEditorProps) {
  const [content, setContent] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const onChangeContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
    //console.log(e.target.value);
    //키보드로 실시간으로 입력사항을 content에 저장
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };

  const onSubmit = () => {
    if (!content) {
      inputRef.current?.focus();
      return;
    }
    onCreate(content);
    setContent("");
  }

  return (
    <div className='TodoEditor'>
      <h4>새로운 Todo 작성하기 ✏️ </h4>
      <div className="editor_wrapper">
        <input
          ref={inputRef}
          placeholder="새로운 Todo..."
          value={content}
          onChange={onChangeContent}
          onKeyDown={onKeyDown}
        />
        <button onClick={onSubmit}>추가</button>
      </div>
    </div>
  )
}

