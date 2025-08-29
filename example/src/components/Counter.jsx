/** @jsx h */
import { h, useState } from "../../../src/public-api";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);

  return (
    <div>
      <button
        onClick={() => {
          console.log("closure sees count =", count);
          setCount(count + 1)}
        }
      >
        {count}
      </button>
      <button
        onClick={() => {
          console.log("closure sees count1 =", count1);
          setCount1(count1 + 1)}
        }
      >
        {count1}
      </button>
    </div>
  )
}

export default Counter;