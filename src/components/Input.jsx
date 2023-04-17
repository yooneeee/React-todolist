import React, { useState } from "react";
import "./Input.css";
import { v4 as uuidv4 } from "uuid";

function Input({ setTodos, todos }) {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const titleChange = (event) => {
    setTitle(event.target.value);
  };
  const contentsChange = (event) => {
    setContents(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const newTodo = {
      title,
      contents,
      isDone: false,
      id: uuidv4(),
    };

    setTodos([...todos, newTodo]);
    setTitle("");
    setContents("");

    //setTodos(initialState);
    //return;
  };

  return (
    <section>
      <form className="add-form" onSubmit={onSubmitHandler}>
        <div className="input-group">
          <label className="form-label">제목</label>
          <input
            className="add-input"
            type="text"
            value={title}
            onChange={titleChange}
          />
          <label className="form-label">내용</label>
          <input
            className="add-input"
            type="text"
            value={contents}
            onChange={contentsChange}
          />
        </div>
        <button className="add_btn">추가하기</button>
      </form>
    </section>
  );
}

export default Input;
// const initialState = {
//   id: 0,
//   title: "",
//   contents: "",
//   isDone: false,
// };
