import { render } from '../../src/public-api'
import App from './App';

const root = document.getElementById("root");
console.log('in main.js')
render(App, root);
