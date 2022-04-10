import { apiGetCity, getWeatherDaily } from '@/api';
import { observer } from '@/app';

const CityForm = () => {
  const cityWrapper = document.createElement('div');
  cityWrapper.classList.add('city-wrapper');

  const cityForm = document.createElement('form');
  cityForm.classList.add('city-form');

  cityForm.insertAdjacentHTML(
    'afterbegin',
    `
          <div class="input-wrapper">
            <label for="input-city">Введите название города</label>
            <input id="input-city" class="input" placeholder="Название города">
          </div>
          <div class="city-actions">
            <button type="submit">Найти</button>
          </div>
        `
  );

  cityWrapper.insertAdjacentElement('afterbegin', cityForm);

  cityForm.addEventListener('submit', async (ev) => {
    ev.preventDefault();
    const input = cityForm.querySelector('.input');
    const nameCity = input.value;
    const city = await apiGetCity(nameCity);
    const cityFormatted = city.map((item) => ({
      city: item.name,
      latitude: item.latitude,
      longitude: item.longitude,
    }))[0];
    const weather = await getWeatherDaily(cityFormatted);
    observer.notify({ city: cityFormatted, weather }, 'api');
    observer.notify('cities', 'ui');
  });
  return cityWrapper;
};

export default CityForm;
