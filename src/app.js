import ContainerBg from './components/container-bg/ContainerBg';
import DisplayWeather from './components/display-weather/DisplayWeather';
import { Observer } from './store';
import './styles/main.scss';

export const observer = new Observer();

const App = () => {
  const app = document.createElement('div');
  app.classList.add('app');

  const containerBg = ContainerBg();
  const displayWeather = DisplayWeather();

  app.insertAdjacentElement('afterbegin', containerBg);
  app.insertAdjacentElement('afterbegin', displayWeather);
  return app;
};

export default App;
