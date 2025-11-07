import React from "react";
import { useRef } from "react";
import { useState } from "react";

const mockTodo = [
  {
    id: 0,
    text: "집안일 하기",
    completed: false,
  },
  {
    id: 1,
    text: "공부 하기",
    completed: false,
  },
  {
    id: 2,
    text: "숙제 하기",
    completed: false,
  },
];
export default function App() {
  const [todos, setTodos] = useState(mockTodo);
  const [inputValue, setInputValue] = useState("");
  const [search, setSearch] = useState("");

  const idRef = useRef(3);

  const handleAddTodo = () => {
    if (inputValue.trim() === "") {
      alert("할 일을 입력해주세요!");
      return;
    }

    const newTodo = {
      id: idRef.current++,
      text: inputValue,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setInputValue("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddTodo();
    }
  };

  const handleToggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleToggleAll = () => {
    const isAllCompleted = todos.every((todo) => todo.completed);
    const updatedTodos = todos.map((todo) => ({
      ...todo,
      completed: !isAllCompleted,
    }));
    setTodos(updatedTodos);
  };

  const filteredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(search.toLowerCase())
  );

  const totalCount = todos.length;
  const completedCount = todos.filter((todo) => todo.completed).length;

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>오늘은📅</h2>
      <h1 style={styles.subtitle}>
        {new Date().toLocaleDateString("ko-KR", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </h1>
      <h3>새로운 Todo 작성하기✏️</h3>
      <div style={styles.inputContainer}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="새로운 Todo..."
          style={styles.input}
        />
        <button onClick={handleAddTodo} style={styles.addButton}>
          추가
        </button>
      </div>

      <h3>TodoList🌱</h3>
      <div style={styles.inputContainer}>
        <input
          type="search"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          placeholder="검색어를 입력하세요"
          style={styles.inputSearch}
        />
      </div>
      <div>
        {todos.length > 0 && (
          <button onClick={handleToggleAll} style={styles.toggleAllButton}>
            {todos.every((todo) => todo.completed)
              ? "전체 해제 ✖️"
              : "전체 선택 ✔️"}
          </button>
        )}
        <div style={styles.todoList}>
          {todos.length === 0 ? (
            <p style={styles.emptyMessage}>
              할 일이 없습니다. 추가해보세요! 😊
            </p>
          ) : filteredTodos.length === 0 ? (
            <p style={styles.emptyMessage}>검색 결과가 없습니다.</p>
          ) : (
            filteredTodos.map((todo) => (
              <div key={todo.id} style={styles.todoItem}>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => handleToggleTodo(todo.id)}
                  style={styles.checkbox}
                />
                <span
                  style={{
                    ...styles.todoText,
                    textDecoration: todo.completed ? "line-through" : "none",
                    color: todo.completed ? "#999" : "#333",
                  }}
                >
                  {todo.text}
                </span>
                <span>
                  {new Date().toLocaleDateString("ko-KR", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
                <button
                  onClick={() => handleDeleteTodo(todo.id)}
                  style={styles.deleteButton}
                >
                  삭제
                </button>
              </div>
            ))
          )}
        </div>
      </div>
      {todos.length > 0 && (
        <div style={styles.statistics}>
          <span>전체: {totalCount}개</span>
          <span style={styles.divider}>|</span>
          <span>완료: {completedCount}개</span>
        </div>
      )}
    </div>
  );
}
const styles = {
  container: {
    maxWidth: "600px",
    margin: "0 auto",
    padding: "2rem",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    color: "#333",
    marginBottom: "2rem",
  },
  subtitle: {
    color: "#1f93ff",
    marginBottom: "2rem",
  },
  toggleAllButton: {
    display: "block",
    margin: "10px 0",
    backgroundColor: "#1f93ff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    padding: "10px 20px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  inputContainer: {
    display: "flex",
    gap: "0.5rem",
    marginBottom: "2rem",
  },
  input: {
    flex: 1,
    padding: "12px",
    fontSize: "1rem",
    border: "2px solid #ddd",
    borderRadius: "5px",
    outline: "none",
  },
  inputSearch: {
    flex: 1,
    padding: "12px",
    fontSize: "1rem",
    outline: "none",
    borderTop: "none",
    borderLeft: "none",
    borderRight: "none",
    borderBottom: "2px solid #ddd",
  },
  addButton: {
    padding: "12px 24px",
    fontSize: "1rem",
    backgroundColor: "#28a745",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  todoList: {
    marginBottom: "1rem",
  },
  todoItem: {
    display: "flex",
    alignItems: "center",
    padding: "12px",
    borderBottom: "1px solid #ccc",
    marginBottom: "0.5rem",
    gap: "0.5rem",
  },
  checkbox: {
    width: "20px",
    height: "20px",
    cursor: "pointer",
  },
  todoText: {
    flex: 1,
    fontSize: "1rem",
    transition: "all 0.3s",
  },
  deleteButton: {
    padding: "6px 12px",
    backgroundColor: "#efefef",
    color: "#333",
    border: "none",
    borderRadius: "3px",
    cursor: "pointer",
    fontSize: "0.875rem",
  },
  statistics: {
    textAlign: "center",
    padding: "1rem",
    backgroundColor: "#e9ecef",
    borderRadius: "5px",
    fontSize: "1rem",
    fontWeight: "bold",
    color: "#495057",
  },
  divider: {
    margin: "0 1rem",
  },
  emptyMessage: {
    textAlign: "center",
    color: "#999",
    fontSize: "1.1rem",
    padding: "2rem",
  },
};
