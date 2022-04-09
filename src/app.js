import ContainerBg from '@/components/container-bg/ContainerBg';
import DisplayWeather from '@/components/display-weather/DisplayWeather';
import { Observer } from '@/observer';
import { apiGetGeoLocation, getWeatherDaily } from '@/api';
import '@/styles/main.scss';

export const observer = new Observer();

const setDataFirstRender = async () => {
  const city = await apiGetGeoLocation();
  const data = await getWeatherDaily(city);
  observer.notify({ city, weather: data });
};

setDataFirstRender();

const App = () => {
  const containerBg = ContainerBg();
  const displayWeather = DisplayWeather();
  const app = document.createElement('div');
  app.classList.add('app');

  const box = document.createElement('div');
  box.classList.add('box');

  const loader = document.createElement('div');
  loader.classList.add('loader');

  box.insertAdjacentElement('beforeend', loader);

  app.insertAdjacentElement('afterbegin', containerBg);
  app.insertAdjacentElement('afterbegin', displayWeather);
  app.insertAdjacentElement('beforeend', box);

  observer.subscribe(() => {
    box.style.display = 'none';
  });
  return app;
};

export default App;
