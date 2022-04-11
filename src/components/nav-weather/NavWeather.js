import { observer } from '@/app';

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

  const citiesBtn = document.createElement('div');
  citiesBtn.classList.add('button-nav-weather');
  citiesBtn.setAttribute('type', 'button');
  citiesBtn.insertAdjacentHTML(
    'afterbegin',
    '<i class="icon-nav-weather cities"></i>'
  );

  mapsBtn.addEventListener('click', () => {
    observer.notify('maps', 'ui');
  });

  citiesBtn.addEventListener('click', () => {
    observer.notify('cities', 'ui');
  });

  el.insertAdjacentElement('beforeend', mapsBtn);
  el.insertAdjacentElement('beforeend', citiesBtn);

  return el;
};

export default NavWeather;
