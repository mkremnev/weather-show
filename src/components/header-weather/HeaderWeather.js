import { observer } from '@/app';

const HeaderWeather = () => {
  const headerWeather = document.createElement('div');
  headerWeather.classList.add('header-weather');

  const headerTitle = document.createElement('div');
  headerTitle.classList.add('header-title', 'loading');

  // TODO реализовать часы
  const headerDay = document.createElement('div');
  headerDay.classList.add('header-day');

  headerWeather.insertAdjacentElement('afterbegin', headerTitle);
  headerWeather.insertAdjacentElement('afterbegin', headerDay);

  observer.subscribe(({ store }) => {
    headerTitle.classList.remove('loading');
    headerTitle.textContent = store.current.weather[0].description;
  });

  return headerWeather;
};

export default HeaderWeather;
