/** @jsx h */
import { h, useState } from "../../src/public-api";
import Counter from "./components/Counter";
import TodoInput from "./components/Input";
import TodoList from "./components/TodoList";

const App = () => {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "Task 1", status: "done", priority: "medium" },
    { id: 2, title: "Task 2", status: "pending", priority: "low" },
    { id: 3, title: "Task 3", status: "cancelled", priority: "medium" },
  ]);

  const addTodo = (todoInput) => {
    const newTodo = {
      id: todoList.length + 1,
      title: todoInput,
      status: todoInput === "1" ? "pending" : "done",
      priority: "low",
    };
    setTodoList((prevTodoList) => [...prevTodoList, newTodo]);
  };

  return (
    <div>
      <h1>My Todo App</h1>
      <TodoInput
        addTodo={addTodo}
      />
      <TodoList
        todoList={todoList}
      />
      <Counter />
      <Counter />
    </div>
  )    
    
}

export default App;