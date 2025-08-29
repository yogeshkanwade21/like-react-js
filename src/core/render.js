import { createInstance, resetInstance, setCurrentInstance } from "./instanceManager";
import createDomElement from "./createDomElement";
import h from './h';

export default function render(componentFunction, container) {
  console.log('in render.js - 1')

  const instance = createInstance(componentFunction);
  const rerenderFunction = () => {
    console.log('in render -> rerenderFunction')
    console.log('in render -> raw componentFunction', componentFunction)

    resetInstance(instance);
    console.log('did set curr ins')
    setCurrentInstance(instance);

    // to get root vnode
    const vnode = h(componentFunction);
    console.log('got vnode', vnode)
    
    // then give this as input to createDomElement
    const component = createDomElement(vnode);
    console.log('built component', component)

    container.innerHTML = '';
    container.appendChild(component);
    instance.rerenderFunction = rerenderFunction;
  };

  console.log('before calling rerenderFunction')

  rerenderFunction();
  console.log('after calling rerenderFunction')
}
