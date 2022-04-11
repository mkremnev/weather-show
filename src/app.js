import ContainerBg from '@/components/container-bg/ContainerBg';
import DisplayWeather from '@/components/display-weather/DisplayWeather';
import InsertCityModal from '@/components/insert-city-modal/InsertCityModal';
import MapsModal from '@/components/maps-modal/MapsModal';
import { Observer } from '@/observer';
import { apiGetGeoLocation, getWeatherDaily, apiYandexMap } from '@/api';
import '@/styles/main.scss';

export const observer = new Observer();

const setDataFirstRender = async () => {
  await apiYandexMap();
  const city = await apiGetGeoLocation();
  const data = await getWeatherDaily(city);
  observer.notify({ city, weather: data }, 'api');
  observer.notify({ city }, 'createMap');
};

setDataFirstRender();

const App = () => {
  const containerBg = ContainerBg();
  const mapsModal = MapsModal();
  const displayWeather = DisplayWeather();
  const insertCityModal = InsertCityModal();
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
  app.insertAdjacentElement('beforeend', insertCityModal);
  app.insertAdjacentElement('beforeend', mapsModal);

  observer.subscribe(() => {
    box.style.display = 'none';
  }, 'api');
  return app;
};

export default App;
