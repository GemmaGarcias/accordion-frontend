import "./scss/main.scss";

let render = function (template, node) {
    node.innerHTML = template;
};

let template = `<h1>Hello World!</h1>`;
render(template, document.querySelector('#main'));
