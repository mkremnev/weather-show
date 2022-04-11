import { observer } from '@/app';
import DaysItemWeather from './DaysItemWeather';

const DaysItemsWeather = () => {
  const list = document.createElement('div');
  list.classList.add('days-items-weather', 'scroll-section');

  observer.subscribe(({ weather }) => {
    list.innerHTML = null;
    weather.daily.forEach((item, index) => {
      if (index > 0) {
        list.insertAdjacentElement(
          'beforeend',
          DaysItemWeather({
            icon: `http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`,
            temp: `${Math.round(item.temp.morn)}`,
            day: 'M',
          })
        );
      }
    });
  }, 'api');

  return list;
};

export default DaysItemsWeather;
