import './style.css'
import { render } from './core/render';
import { App } from './App';
import { setGlobalRerenderFunction, resetStateIndex } from './core/hooks/useState';

const root = document.getElementById("app");

render(App(), root);

const rerenderFunction = () => {
    resetStateIndex();
    render(App(), root);
}

setGlobalRerenderFunction(rerenderFunction)
