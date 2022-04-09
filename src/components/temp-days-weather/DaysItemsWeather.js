import DaysItemWeather from './DaysItemWeather';

const DaysItemsWeather = () => {
  const list = document.createElement('div');
  list.classList.add('days-items-weather', 'scroll-section');

  Array.from({ length: 5 }).forEach(() => {
    list.insertAdjacentElement(
      'beforeend',
      DaysItemWeather({ icon: 'icon-day.png', temp: '13', day: 'M' })
    );
  });

  return list;
};

export default DaysItemsWeather;
