import './scss/main.scss';
import Accordion from './Accordion/Accordion';

let render = function (template, node) {
    node.innerHTML = template;
  };

let template = new Accordion().render();
render(template, document.querySelector('#main'));
