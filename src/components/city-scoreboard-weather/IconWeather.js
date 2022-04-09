const IconWeather = () => {
  const el = document.createElement('div');
  el.classList.add('icon-weather');

  el.insertAdjacentHTML(
    'afterbegin',
    `
          <div class="icon-wrapper-weather">
            <img src="/assets/img/icon.png" alt="Icon" />
          </div>
        `
  );

  return el;
};

export default IconWeather;
