/** @jsx h */
import { h } from "../../../src/public-api";

const TodoList = ({todoList}) => {
  return (
    <ul>
      {todoList.map((todo) => {
        return <li>{todo.title} - {todo.status}</li>
      })}
    </ul>
  )
}

export default TodoList;