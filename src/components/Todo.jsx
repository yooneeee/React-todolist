import React from "react";

function Todo(item, isDone, setTodos) {
  const deleteClick = () => {
    setTodos((todo) => todo.filter((t) => t.id !== item.id));
  };

  const EditClick = () => {
    setTodos((todo) =>
      todo.map((t) => {
        if (t.id === item.id) {
          return { ...t, isDone: !t.isDone };
        } else {
          return t;
        }
      })
    );
  };
  return (
    <div style={{ border: "1px solid green" }} key={item.id}>
      <h3>{item.title}</h3>
      <h5>{item.contents}</h5>
      <button onClick={deleteClick}>삭제하기</button>
      <button onClick={EditClick}>{isDone === true ? "취소" : "완료"}</button>
    </div>
  );
}

export default Todo;
