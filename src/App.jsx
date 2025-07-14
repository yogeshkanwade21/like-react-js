import { createElement } from "./core/createElement";

export const App = () => {
    return createElement('button', {onClick: () => {console.log('clicked')}}, 'Click')
}