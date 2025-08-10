let _state = [];
let _stateIndex = 0;

let globalRerenderFunction = null;

export function setGlobalRerenderFunction(rerenderFunction) {
  globalRerenderFunction = rerenderFunction;
}

export function useState(initialValue) {
  const currentIndex = _stateIndex;

  if (_state[currentIndex] === undefined) {
    _state[currentIndex] = initialValue;
  }

  const value = _state[currentIndex];

  function setState(newValue) {
    _state[currentIndex] = newValue;
    globalRerenderFunction && globalRerenderFunction();
  }

  _stateIndex++;
  return [value, setState];
}

export function resetStateIndex() {
  _stateIndex = 0;
}
