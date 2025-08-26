/** @jsx h */
import { h, useState } from "../../../src/public-api";

const Counter = () => {
  const [count, setCount] = useState(0);

  return <button onClick={() => setCount(count + 1)}>{count}</button>
}

export default Counter;