import React from "react";
import "./TodoList.css";
function TodoList({ todos, setTodos }) {
  const deleteClick = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
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

  return (
    <div>
      <div>
        <h3 className="listTitle">Working..🔥</h3>
        <div className="list-wrapper">
          {todos.map((todo) => {
            if (!todo.isDone) {
              return (
                <div className="list" key={todo.id}>
                  <h3 className="title">{todo.title}</h3>
                  <h5 className="content">{todo.contents}</h5>
                  <div className="btn">
                    <button
                      className="delete_btn"
                      onClick={() => deleteClick(todo.id)} //인자 넘겨줄 경우 ()=>를 함수 명 앞에 붙여줘야함
                      // 안그러면 함수 바로 실행돼서 오류남
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
