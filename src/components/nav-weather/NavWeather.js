const NavWeather = () => {
  const el = document.createElement('div');
  el.classList.add('nav-weather');

  const mapsBtn = document.createElement('div');
  mapsBtn.classList.add('button-nav-weather');
  mapsBtn.setAttribute('type', 'button');
  mapsBtn.insertAdjacentHTML(
    'afterbegin',
    '<i class="icon-nav-weather maps"></i>'
  );
  mapsBtn.addEventListener('click', () => console.log('click mapsBtn'));

  const citiesBtn = document.createElement('div');
  citiesBtn.classList.add('button-nav-weather');
  citiesBtn.setAttribute('type', 'button');
  citiesBtn.insertAdjacentHTML(
    'afterbegin',
    '<i class="icon-nav-weather cities"></i>'
  );
  citiesBtn.addEventListener('click', () => console.log('click citiesBtn'));

  el.insertAdjacentElement('beforeend', mapsBtn);
  el.insertAdjacentElement('beforeend', citiesBtn);

  return el;
};

export default NavWeather;
