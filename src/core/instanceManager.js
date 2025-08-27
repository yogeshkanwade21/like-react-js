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
    console.log('in createInstance')
    console.log('in createInstance - vnode', vnode)

    let instance = instances.get(vnode);
    if (!instance) {
        // If no instance exists, create one and initialize its state.
        instance = {
            vnode,
            componentFunction: vnode.type,
            state: [],
            stateIndex: 0,
            rerenderFunction: null,
        };
        instances.set(vnode, instance);
    }
    // console.log('instance initial set during create', JSON.parse(JSON.stringify(instance.state)))
    return instance;
}

export function getInstance(componentFunction) {
    instances.get(componentFunction);
}

export function resetInstance(instance) {
    instance.stateIndex = 0;
}

console.log('bottom level',)