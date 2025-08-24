import './style.css'
import { render } from './core/render';
import { App } from './App';

const root = document.getElementById("root");
console.log('in main.js')
render(App, root);
