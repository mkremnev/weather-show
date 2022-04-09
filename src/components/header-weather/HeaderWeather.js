const HeaderWeather = () => {
  const el = document.createElement('div');
  el.classList.add('header-weather');

  el.insertAdjacentHTML(
    'afterbegin',
    `
  <div class="header-title">Rainy moning</div>
  <div class="header-day">Tuesday 7:28 AM</div>`
  );

  return el;
};

export default HeaderWeather;
