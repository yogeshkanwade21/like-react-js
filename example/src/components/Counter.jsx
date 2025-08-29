/** @jsx h */
import { h, useState } from "../../../src/public-api";

const Counter = () => {
  const [count, setCount] = useState(0);
  console.log("before closure sees count =", count);

  return (
    <button
      onClick={() => {
        console.log("closure sees count =", count);
        setCount(count + 1)}
      }
    >
      {count}
    </button>
  )
}

export default Counter;