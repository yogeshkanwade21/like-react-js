import { createInstance, resetInstance, setCurrentInstance } from "./instanceManager";
import patch from "./patch";

export default function createDomElement(vnode) {
    console.log('ye mera vnode', vnode)

    // vnode itself is a string/number
    if (typeof vnode === 'string' || typeof vnode === 'number') {
        const textNode = document.createTextNode(vnode);
        return textNode;
    }

    // functional component
    if (typeof vnode.type === 'function') {
        console.log('typeof vnode === function')
        const instance = createInstance(vnode);
        let oldVNode;

        function rerenderFunction() {
            resetInstance(instance);
            setCurrentInstance(instance);
            const componentVNode = instance.componentFunction(vnode.props);
            patch(oldVNode, componentVNode);
        }

        instance.rerenderFunction = rerenderFunction;
        setCurrentInstance(instance);
        
        const componentVNode = instance.componentFunction(vnode.props);
        
        const domNode = createDomElement(componentVNode);
        oldVNode = componentVNode;
        instance.dom = domNode;

        return domNode;
    }

    // HTML elements
    if (typeof vnode.type === 'string') {
        console.log('HTML element of type', vnode.type)
        const el = document.createElement(vnode.type);
        vnode.dom = el;

        // for props
        for (const [key, value] of Object.entries(vnode.props || {})) {
            // event handlers
            if (key.startsWith('on') && typeof value === 'function') {
                const event = key.slice(2).toLowerCase();
                el.addEventListener(event, value);
            }
            // value of controlled inputs
            else if (key === 'value' && (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA')) {
                el.value = value;
            }
            // Handle boolean attributes like 'disabled'
            // A disabled button should be disabled when the value is a truthy value.
            else if (typeof value === 'boolean') {
                if (value) {
                    el.setAttribute(key, '');
                } else {
                    el.removeAttribute(key);
                }
            }
            // handle className (utility classes)
            else if (key === 'className') {
                el.setAttribute('class', value);
            }
            // set other standard attributes
            else {
                el.setAttribute(key, value);
            }
        }

        // for children
        vnode.children.flat().forEach((child) => {
            const childDom = createDomElement(child);
            if (childDom) {
                el.appendChild(childDom);
            }
        });

        return el;
    }   
}
