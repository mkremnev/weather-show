import ContainerBg from '@/components/container-bg/ContainerBg';
import DisplayWeather from '@/components/display-weather/DisplayWeather';
import Store from '@/store';
import { Observer } from '@/observer';
import '@/styles/main.scss';

export const observer = new Observer();
export const store = new Store();

console.log(store);

const setDataFirstRender = async () => {
  await store.actionSetName();
  await store.actionSetCurrent();
  await store.actionSetDailyWeather();
};

setDataFirstRender();

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
