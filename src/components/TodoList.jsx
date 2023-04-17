import React from "react";
import "./TodoList.css";
function TodoList({ todos, isDone, setTodos }) {
  const deleteClick = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
    //setTodos(...todos.filter((item) => item.id !== todos.id));
  };

  const stateChangeClick = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isDone: !todo.isDone,
        };
      } else {
        return { ...todo };
      }
    });
    setTodos(newTodos);
  };
  /*const todos_index = todos.findIndex((todo) => todo.id === id);

    isDone
      ? (todos[todos_index].isDone = true)
      : (todos[todos_index].isDone = false);
    setTodos(...todos);

     setTodos((todos) =>
      todos.map((item) => {
        if (item.id === todos.id) {
          return { ...todos, isDone: !todos.isDone };
        } else {
          return todos;
        }
      })
    ); */

  return (
    <div>
      <div>
        <h3 className="listTitle">Working..🔥</h3>
        <div className="list-wrapper">
          {todos.map((todo) => {
            if (!todo.isDone) {
              return (
                <div className="list">
                  <h3 className="title">{todo.title}</h3>
                  <h5 className="content">{todo.contents}</h5>
                  <div className="btn">
                    <button
                      className="delete_btn"
                      onClick={() => deleteClick(todo.id)}
                    >
                      삭제하기
                    </button>
                    <button
                      className="done_btn"
                      onClick={() => stateChangeClick(todo.id)}
                    >
                      완료
                    </button>
                  </div>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
      <div>
        <h3 className="listTitle">Done..!🎉</h3>
        <div className="list-wrapper">
          {todos.map((todo) => {
            if (todo.isDone) {
              return (
                <div className="list" key={todo.id}>
                  <h3 className="title">{todo.title}</h3>
                  <h5 className="content">{todo.contents}</h5>
                  <div className="btn">
                    <button
                      className="delete_btn"
                      onClick={() => deleteClick(todo.id)}
                    >
                      삭제하기
                    </button>
                    <button
                      className="done_btn"
                      onClick={() => stateChangeClick(todo.id)}
                    >
                      취소
                    </button>
                  </div>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default TodoList;

/* <h3>{isDone === true ? "Done..!🎉" : "Working..🔥"}</h3>
      {todos
        .filter((todo) => todo.isDone === false)
        .map((todo) => {
          return (
            <div style={{ border: "1px solid green" }} key={todo.id}>
              <h3>{todo.title}</h3>
              <h5>{todo.contents}</h5>
              <button onClick={() => deleteClick(todo.id)}>삭제하기</button>
              <button onClick={stateChangeClick}>
                {isDone ? "취소" : "완료"}
              </button>
            </div>
          );
        })} */
