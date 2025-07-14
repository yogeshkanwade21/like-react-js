import { render } from '../render.js';

let _state = [];
let _stateIndex = 0;

const rerender = () => {
  _stateIndex = 0;
  import('../../App.jsx').then(({ App }) => {
    const root = document.getElementById("app");
    render(App(), root);
  });
};

export function useState(initialValue) {
  const currentIndex = _stateIndex;

  if (_state[currentIndex] === undefined) {
    _state[currentIndex] = initialValue;
  }

  const value = _state[currentIndex];

  function setState(newValue) {
    _state[currentIndex] = newValue;
    rerender();
  }

  _stateIndex++;
  return [value, setState];
}
