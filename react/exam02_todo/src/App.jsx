import React, { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  // 할 일 추가
  const handleAddTodo = () => {
    if (inputValue.trim() === "") {
      alert("할 일을 입력해주세요!");
      return;
    }

    const newTodo = {
      id: Date.now(),
      text: inputValue,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setInputValue(""); // input 초기화
  };

  // Enter 키로 추가
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddTodo();
    }
  };

  // 완료 상태 토글
  const handleToggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // 할 일 삭제
  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // 통계 계산
  const totalCount = todos.length;
  const completedCount = todos.filter((todo) => todo.completed).length;

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>📝 Todo List</h1>

      {/* 입력 영역 */}
      <div style={styles.inputContainer}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="할 일을 입력하세요..."
          style={styles.input}
        />
        <button onClick={handleAddTodo} style={styles.addButton}>
          추가
        </button>
      </div>

      {/* 할 일 목록 */}
      <div style={styles.todoList}>
        {todos.length === 0 ? (
          <p style={styles.emptyMessage}>할 일이 없습니다. 추가해보세요! 😊</p>
        ) : (
          todos.map((todo) => (
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

      {/* 통계 */}
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
    textAlign: "center",
    color: "#333",
    marginBottom: "2rem",
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
    backgroundColor: "#f8f9fa",
    borderRadius: "5px",
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
    backgroundColor: "#dc3545",
    color: "white",
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

export default App;
