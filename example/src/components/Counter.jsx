/** @jsx h */
import { h, useState } from "../../../src/public-api";

const Counter = () => {
  const [count, setCount] = useState(true);
  // const [count1, setCount1] = useState(0);

  return (
    <div>
      <button
        onClick={() => {
          console.log("closure sees count =", count);
          setCount(count => !count)}
        }
      >
        {count ? 'true' : 'false'}
      </button>
    </div>
  )
}

export default Counter;