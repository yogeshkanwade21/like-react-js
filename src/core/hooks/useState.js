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
    
    console.log('useState call - newValue', newValue)
    console.log('useState call - state freeze', JSON.parse(JSON.stringify(state)))
    console.log('useState call - state live', state)
    console.log('useState call - currentIndex live', currentIndex)
    console.log('useState call - currentIndex dead', JSON.parse(JSON.stringify(currentIndex)))
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

  console.log('returning value', value, currentIndex)
  currentInstance.stateIndex++;
  return [value, setState];
}
