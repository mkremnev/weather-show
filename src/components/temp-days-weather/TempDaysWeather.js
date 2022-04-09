import DaysItemsWeather from './DaysItemsWeather';

const TempDaysWeather = () => {
  const daysItemsWeather = DaysItemsWeather();

  const el = document.createElement('div');
  el.classList.add('temp-days-weather');

  el.insertAdjacentElement('beforeend', daysItemsWeather);

  return el;
};

export default TempDaysWeather;
