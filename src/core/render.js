import { createInstance, resetInstance, setCurrentInstance } from "./instanceManager";
import createDomElement from "./createDomElement";
import h from './h';
import patch from "./patch";

export default function render(componentFunction, container) {

  // Create the initial VNode for the root component
  const rootVNode = h(componentFunction);

  // Create a unique instance for the root component
  const instance = createInstance(rootVNode);
  let oldVNode;

  const rerenderFunction = () => {    
    resetInstance(instance);
    setCurrentInstance(instance);
    
    const vnode = instance.componentFunction(rootVNode.props);
    patch(oldVNode, vnode);
  };

  instance.rerenderFunction = rerenderFunction;
  setCurrentInstance(instance);

  const vnode = instance.componentFunction(rootVNode.props);
  const dom = createDomElement(vnode);
  oldVNode = vnode;
  
  container.innerHTML = '';
  container.appendChild(dom);
}
