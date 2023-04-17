import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Input from "./components/Input";
import TodoList from "./components/TodoList";
import { v4 as uuidv4 } from "uuid";
function App() {
  const [todos, setTodos] = useState(initialState);
  return (
    <div className="wrap">
      <Header />
      <main>
        <Input todos={todos} setTodos={setTodos} />
        <TodoList todos={todos} setTodos={setTodos} />
      </main>
    </div>
  );
}

export default App;

const initialState = [
  {
    title: "리액트 공부하기",
    contents: "리액트 기초를 공부해봅시다",
    isDone: false,
    id: uuidv4(),
  },
  {
    title: "리액트",
    contents: "리액트",
    isDone: true,
    id: uuidv4(),
  },
];
