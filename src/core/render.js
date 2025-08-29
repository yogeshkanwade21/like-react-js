import { createInstance, resetInstance, setCurrentInstance } from "./instanceManager";
import createDomElement from "./createDomElement";
import h from './h';

export default function render(componentFunction, container) {

  // Create the initial VNode for the root component
  const rootVNode = h(componentFunction);
  console.log('got rootVNode', rootVNode)
  // Create a unique instance for the root component
  const instance = createInstance(rootVNode);

  const rerenderFunction = () => {
    resetInstance(instance);
    setCurrentInstance(instance);
    
    const vnode = instance.componentFunction(rootVNode.props);
    // then give this as input to createDomElement
    const dom = createDomElement(vnode);
    console.log('built dom', dom)

    if (instance.dom) {
      instance.dom.replaceWith(dom);
    } else {
      container.innerHTML = '';
      container.appendChild(dom);
    }
    instance.dom = dom;
  };

  instance.rerenderFunction = rerenderFunction;

  console.log('before calling rerenderFunction')
  rerenderFunction();
  console.log('after calling rerenderFunction')
}
