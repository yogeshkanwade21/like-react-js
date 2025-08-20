import { createInstance, resetInstance, setCurrentInstance } from "./instanceManager";

export function render(componentFunction, container) {
  console.log('in render.js - 1')

  const instance = createInstance(componentFunction);
  const rerenderFunction = () => {
    console.log('in render -> rerenderFunction')
    console.log('in render -> raw componentFunction', componentFunction)

    resetInstance(instance);
    console.log('did set curr ins')
    setCurrentInstance(instance);
    const component = componentFunction();
    console.log('built component', component)

    container.innerHTML = '';
    container.appendChild(component);
    instance.rerenderFunction = rerenderFunction;
  };

  console.log('before calling rerenderFunction')

  rerenderFunction();
  console.log('after calling rerenderFunction')
}
