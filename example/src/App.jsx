/** @jsx h */
import { h, useState } from "../../src/public-api";

import Counter from "./components/Counter";

const App = () => {
    console.log('running/ building app')
    const [count, setCount] = useState(0);
    // const [count1, setCount1] = useState(0);
    // const [text, setText] = useState("Hello");

    // const title = h(
    //     'h1',
    //     {onClick: () => {
    //         text === 'Hello' ? setText("World") : setText("Hello")
    //     }},
    //     text
    // );

    // const button = h('button', {onClick: () => setCount(count + 1)}, `Count ${count}`);
    // const button1 = h('button', {onClick: () => setCount1(count1 + 1)}, `Count ${count1}`);
    // const div = h('div', {}, button, button1, title);

    return (
      <div>
      
        <Counter />
        <Counter />
      </div>
    )
    // return <button onClick={() => setCount(count + 1)}>Count {count}</button>
    
    
}

export default App;