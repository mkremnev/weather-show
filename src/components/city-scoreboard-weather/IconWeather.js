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

  observer.subscribe(({ weather }) => {
    image.setAttribute(
      'src',
      `http://openweathermap.org/img/wn/${weather.current?.weather[0].icon}@2x.png`
    );
  }, 'api');

  return iconWeather;
};

export default IconWeather;
