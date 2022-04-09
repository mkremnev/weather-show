import { observer } from '@/app';

const CityNameWeather = () => {
  const cityNameWeather = document.createElement('div');
  cityNameWeather.classList.add('city-name-weather');

  const cityName = document.createElement('div');
  cityName.classList.add('city-name');

  cityNameWeather.insertAdjacentElement('afterbegin', cityName);

  observer.subscribe(({ city }) => {
    cityName.textContent = city.city;
  });

  return cityNameWeather;
};

export default CityNameWeather;
