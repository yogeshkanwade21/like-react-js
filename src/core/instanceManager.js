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

export function createInstance(componentFunction) {
    console.log('in createInstance')
    console.log('in createInstance - componentFunction', componentFunction)
    if (instances.has(componentFunction)) {
        return instances.get(componentFunction);
    } else {
        const instance = {
            componentFunction,
            state: [],
            stateIndex: 0,
            rerenderFunction: null,
            dom: null
        };

        instances.set(componentFunction, instance);
        console.log('instances', instances)
        return instance;
    }
}

export function getInstance(componentFunction) {
    instances.get(componentFunction);
}

export function resetInstance(instance) {
    instance.stateIndex = 0;
}

console.log('bottom level',)