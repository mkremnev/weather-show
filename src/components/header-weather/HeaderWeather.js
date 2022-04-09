import { observer } from '@/app';

const HeaderWeather = () => {
  const headerWeather = document.createElement('div');
  headerWeather.classList.add('header-weather');

  const headerTitle = document.createElement('div');
  headerTitle.classList.add('header-title');

  headerWeather.insertAdjacentElement('afterbegin', headerTitle);

  observer.subscribe(({ weather }) => {
    headerTitle.textContent = weather.current.weather[0].description;
  });

  return headerWeather;
};

export default HeaderWeather;
