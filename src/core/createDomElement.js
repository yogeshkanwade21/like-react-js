export default function createDomElement(vnode) {
    
    if (typeof vnode === 'string' || typeof vnode === 'number') {
        return document.createTextNode(vnode);
    }
    
    if (typeof vnode === 'object' && vnode !== null) {
        const { type, props = {}, children = [] } = vnode;

        if (typeof type === 'function') {
            const componentVnode = type(props || {});
            return createDomElement(componentVnode);
        }

        const el = document.createElement(type);

        // for props
        for (const [key, value] of Object.entries(props || {})) {
            if (key.startsWith('on') && typeof value === 'function') {
                const event = key.slice(2).toLowerCase();
                el.addEventListener(event, value);
            }
        }

        // for children
        children.flat().forEach((child) => {
            if (typeof child.type === 'string') {
                const childDomNode = createDomElement(child);
                childDomNode instanceof Node && el.appendChild(childDomNode);
            } else if (typeof child.type === 'function') {
                const childVnode = child.type(child.props || {});
                const childDomNode = createDomElement(childVnode);
                childDomNode instanceof Node && el.appendChild(childDomNode);
            } else if (typeof child === 'string' || typeof child === 'number') {
                const textNode = document.createTextNode(child);
                textNode instanceof Node && el.appendChild(textNode);
            }
        });

        return el;
    }
}
