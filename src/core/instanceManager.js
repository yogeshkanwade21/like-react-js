console.log('in instanceManager')

export const instances = new WeakMap();
console.log('instances weakmap created')

let currentInstance = null;

export function setCurrentInstance(instance) {
    currentInstance = instance;
}

export function getCurrentInstance() {
    return currentInstance;
}

export function createInstance(vnode) {
    if (instances.has(vnode)) {
        return instances.get(vnode);
    } else {
        console.log('in createInstance - vnode', vnode)
    
        const instance = {
            vnode,
            componentFunction: vnode.type,
            state: [],
            stateIndex: 0,
            rerenderFunction: null,
            dom: null,
        };

        instances.set(vnode, instance);
        return instances.get(vnode);
    }
}

export function getInstance(componentFunction) {
    instances.get(componentFunction);
}

export function resetInstance(instance) {
    instance.stateIndex = 0;
}