import { h } from "./core/h";
import { useState } from "./core/hooks/useState";

export const App = () => {
    console.log('running/ building app')
    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(0);
    const [text, setText] = useState("Hello");

    const title = h(
        'h1',
        {onClick: () => {
            text === 'Hello' ? setText("World") : setText("Hello")
        }},
        text
    );

    // const button = createElement('button', {}, `Count`)
    const button = h('button', {onClick: () => setCount(count + 1)}, `Count ${count}`);
    const button1 = h('button', {onClick: () => setCount1(count + 1)}, `Count ${count1}`);
    const div = h('div', {}, button, button1);

    // return h('div', {}, title, button)
    // return createElement('div', {}, button)
    return div;
}