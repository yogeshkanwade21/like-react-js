import { createInstance, resetInstance, setCurrentInstance } from "./instanceManager";
import createDomElement from "./createDomElement";
import h from "./h";

export default function render(componentFunction, container) {
  console.log('in render.js - 1')
  const rootVnode = h(componentFunction);
  // Pass this VNode to createInstance to get the instance.
  const instance = createInstance(rootVnode);
  
  const rerenderFunction = () => {
    console.log('in render -> rerenderFunction')
    console.log('in render -> raw componentFunction', componentFunction)

    resetInstance(instance);
    console.log('did set curr ins')
    setCurrentInstance(instance);
    // to get vnode
    const vnode = instance.componentFunction();
    console.log('got vnode', vnode)
    // then give this as input to createDomElement
    // recursively build entire component
    const component = createDomElement(vnode);
    console.log('built component', component)
    // set this function as re-render function
    instance.rerenderFunction = rerenderFunction;

    container.innerHTML = '';
    container.appendChild(component);
  };

  console.log('before calling rerenderFunction')

  rerenderFunction();
  console.log('after calling rerenderFunction')
}
