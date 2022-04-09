import { observer } from '@/app';

const CityNameWeather = () => {
  const cityNameWeather = document.createElement('div');
  cityNameWeather.classList.add('city-name-weather');

  const cityName = document.createElement('div');
  cityName.classList.add('city-name', 'loading');

  cityNameWeather.insertAdjacentElement('afterbegin', cityName);

  observer.subscribe(({ store }) => {
    cityName.classList.remove('loading');
    cityName.textContent = store.name;
  });

  return cityNameWeather;
};

export default CityNameWeather;
