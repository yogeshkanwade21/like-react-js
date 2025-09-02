/** @jsx h */
import { h, useState } from "../../src/public-api";
import Counter from "./components/Counter";
import TodoInput from "./components/Input";
import TodoList from "./components/TodoList";

const App = () => {
  // const [todoList, setTodoList] = useState([
  //   { id: 1, title: "Task 1", status: "done", priority: "medium" },
  //   { id: 2, title: "Task 2", status: "pending", priority: "low" },
  //   { id: 3, title: "Task 3", status: "cancelled", priority: "medium" },
  // ]);
  const [count, setCount] = useState(true);

  // const addTodo = (todoInput) => {
  //   const newTodo = {
  //     id: todoList.length + 1,
  //     title: todoInput,
  //     status: todoInput === "1" ? "pending" : "done",
  //     priority: "low",
  //   };
  //   setTodoList((prevTodoList) => [...prevTodoList, newTodo]);
  // };

  return (
    <div>
      {
        count ? 
          <h1>h1 title</h1>
        : 
        <span>Span</span>
      }
      <button
        onClick={() => {
          console.log("closure sees count =", count);
          setCount(count => !count)}
        }
      >toggle</button>
      {/* <TodoInput
        addTodo={addTodo}
      />
      <TodoList
        todoList={todoList}
      /> */}
      {/* <Counter /> */}
      {/* <Counter /> */}
    </div>
  )    
    
}

export default App;