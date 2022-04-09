const CityNameWeather = () => {
  const el = document.createElement('div');
  el.classList.add('city-name-weather');

  el.insertAdjacentHTML('afterbegin', `<div class="city-name">Paris</div>`);

  return el;
};

export default CityNameWeather;
