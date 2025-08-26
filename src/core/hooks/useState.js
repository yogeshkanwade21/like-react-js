import { getCurrentInstance } from "../instanceManager";

export function useState(initialValue) {
  console.log('in useState get curr ins')

  const currentInstance = getCurrentInstance();
  const state = currentInstance.state;
  const currentIndex = currentInstance.stateIndex;

  if (state[currentIndex] === undefined) {
    state[currentIndex] = initialValue;
  }

  const value = state[currentIndex];

  function setState(newValue) {
    let derivedNewValue;
    if (typeof newValue === 'function') {
      const previousValue = state[currentIndex];
      derivedNewValue = newValue(previousValue);
    } else {
      derivedNewValue = newValue;
    }
    state[currentIndex] = derivedNewValue;
    currentInstance?.rerenderFunction();
  }

  currentInstance.stateIndex++;
  return [value, setState];
}
