import { createElement } from "./core/createElement";
import { useState } from "./core/hooks/useState";

export const App = () => {
    console.log('running/ building app')
    const [count, setCount] = useState(0);
    const [text, setText] = useState("Hello");

    const title = createElement(
        'h1',
        {onClick: () => {
            text === 'Hello' ? setText("World") : setText("Hello")
        }},
        text
    );

    // const button = createElement('button', {}, `Count`)
    const button = createElement('button', {onClick: () => setCount(count + 1)}, `Count ${count}`)

    return createElement('div', {}, title, button)
    // return createElement('div', {}, button)
}