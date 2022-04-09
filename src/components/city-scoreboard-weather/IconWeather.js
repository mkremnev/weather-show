import { observer } from '@/app';

const IconWeather = () => {
  const iconWeather = document.createElement('div');
  iconWeather.classList.add('icon-weather');

  const iconWrapperWeather = document.createElement('div');
  iconWrapperWeather.classList.add('icon-wrapper-weather');

  const image = document.createElement('img');
  image.setAttribute('src', '/assets/img/icon.png');
  image.setAttribute('alt', 'Weather');

  iconWrapperWeather.insertAdjacentElement('beforeend', image);
  iconWeather.insertAdjacentElement('beforeend', iconWrapperWeather);

  observer.subscribe(({ store }) => {
    image.setAttribute(
      'src',
      `http://openweathermap.org/img/wn/${store.current?.weather[0].icon}@2x.png`
    );
  });

  return iconWeather;
};

export default IconWeather;
