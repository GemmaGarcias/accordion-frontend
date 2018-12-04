import './scss/main.scss';
import Accordion from './components/Accordion/Accordion';

let render = function (template, node) {
    node.innerHTML = template.render();
    template.init();
  };

let accordion = new Accordion();
render(accordion, document.querySelector('.main'));
