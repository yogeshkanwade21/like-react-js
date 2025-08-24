export default function createDomElement(vnode) {
    const { type, props, children } = vnode;

    if (typeof vnode === 'string' || typeof vnode === 'number') {
        return document.createTextNode(vnode);
    }

    if (typeof vnode === 'object' && vnode !== null) {

        const el = document.createElement(type);

        for (const [key, value] of Object.entries(props || {})) {
            if (key.startsWith('on') && typeof value === 'function') {
                const event = key.slice(2).toLowerCase();
                el.addEventListener(event, value);
            }
        }

        children.flat().forEach((child) => {
            if (typeof child.type === 'string') {
                const childElement = createDomElement(child);
                childElement && el.appendChild(childElement);
            } else if (typeof child === 'string' || typeof child === 'number') {
                const textNode = document.createTextNode(child);
                textNode && el.appendChild(textNode);
            }
        });

        return el;
    }
}
