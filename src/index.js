import App from './app';

const render = (app, el) => {
  el.insertAdjacentElement('afterbegin', app());
};

render(App, document.getElementById('root'));
