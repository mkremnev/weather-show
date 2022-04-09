import ContainerBg from '@/components/container-bg/ContainerBg';
import DisplayWeather from '@/components/display-weather/DisplayWeather';
import Store from '@/store';
import { Observer } from '@/observer';
import '@/styles/main.scss';

export const observer = new Observer();
export const store = new Store();

const setDataFirstRender = async () => {
  await store.actionSetName();
  await store.actionSetCurrent();
  await store.actionSetDailyWeather();
};

setDataFirstRender().then(() => observer.notify(store));

console.log(store);

const App = () => {
  const app = document.createElement('div');
  app.classList.add('app', 'loading');

  const containerBg = ContainerBg();
  const displayWeather = DisplayWeather();

  app.insertAdjacentElement('afterbegin', containerBg);
  app.insertAdjacentElement('afterbegin', displayWeather);

  observer.subscribe(() => {
    app.classList.remove('loading');
  });
  return app;
};

export default App;
