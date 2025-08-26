/** @jsx h */
import { h, useState } from "../../../src/public-api";

const TodoInput = ({addTodo}) => {
  const [todoInput, setTodoInput] = useState("");

  return (
    <div>
      <input
        type="text"
        name="todo_input"
        id="todo_input"
        value={todoInput}
        onKeyDown={(e) => e.key === "Enter" && addTodo?.(todoInput)}
        onChange={(event) => {
          const input = event.target.value;
          console.log('input', input)
          setTodoInput(input)
        }}
        placeholder="Enter your Todo"
      />
      <button
        id="add_todo_button"
        disabled={todoInput.trim() === ""}
        onClick={() => {
          addTodo(todoInput);
          setTodoInput("");
        }}
      >
        Add Todo
      </button>
    </div>
  );
};

export default TodoInput;
