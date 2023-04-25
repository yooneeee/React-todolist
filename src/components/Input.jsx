import React, { useState } from "react";
import "./Input.css";
import { v4 as uuidv4 } from "uuid";

function Input({ setTodos, todos }) {
  /* const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const titleChange = (event) => {
    setTitle(event.target.value);
  };
  const contentsChange = (event) => {
    setContents(event.target.value); 
  };
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setTodos({ ...todos, [name]: value, id: uuidv4() });
  };*/
  const initState = {
    id: 0,
    title: "",
    contents: "",
    isDone: false,
  };
  const [todo, setTodo] = useState(initState);
  const onChangeHandler = (event) => {
    //value = title, neme = contents
    const { value, name } = event.target;
    console.log(event.target);
    //console.log("value:", value, "name: ", name);
    //얕은복사로기존값복사하고 새로추가된 값들 대입
    setTodo({ ...todo, [name]: value, id: uuidv4() });
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    /*     const newTodo = {
      title,
      contents,
      isDone: false,
      id: uuidv4(),
    };
    */

    setTodos([...todos, todo]); //불변성 유지
    //input창 비우기
    setTodo(initState);
  };

  return (
    <section>
      <form className="add-form" onSubmit={onSubmitHandler}>
        <div className="input-group">
          <label className="form-label">제목</label>
          <input
            required
            className="add-input"
            type="text"
            name="title"
            value={todo.title}
            onChange={onChangeHandler}
          />
          <label className="form-label">내용</label>
          <input
            required
            className="add-input"
            type="text"
            name="contents"
            value={todo.contents}
            onChange={onChangeHandler}
          />
        </div>
        <button className="add_btn">추가하기</button>
      </form>
    </section>
  );
}

export default Input;
