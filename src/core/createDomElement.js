export default function createDomElement(vnode) {
    
    if (typeof vnode === 'string' || typeof vnode === 'number') {
            console.log('createDomElement - string/number vnode')

        return document.createTextNode(vnode);
    }
    
    if (typeof vnode === 'object' && vnode !== null) {
        const { type, props = {}, children = [] } = vnode;

        if (typeof type === 'function') {
            console.log('createDomElement - function vnode')
            const componentVnode = type(props || {});
            return createDomElement(componentVnode);
        }

        const el = document.createElement(type);
        console.log('createDomElement - el created of type', type)


        // for props
        for (const [key, value] of Object.entries(props || {})) {
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
        children.flat().forEach((child) => {
            if (typeof child.type === 'string') {
                const childDomNode = createDomElement(child);
                childDomNode instanceof Node && el.appendChild(childDomNode);
            } else if (typeof child.type === 'function') {
                console.log('function child')
                const childVnode = child.type(child.props || {});
                console.log('childVnode during handling functional children', childVnode)

                const childDomNode = createDomElement(childVnode);
                childDomNode instanceof Node && el.appendChild(childDomNode);
            } else if (typeof child === 'string' || typeof child === 'number') {
                console.log('createDomElement - string/number child appended',)
                
                const textNode = document.createTextNode(child);
                textNode instanceof Node && el.appendChild(textNode);
            }
        });

        return el;
    }
}
