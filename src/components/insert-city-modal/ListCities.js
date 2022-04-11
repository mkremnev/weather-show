import { observer } from '@/app';
import { apiGetCity, getWeatherDaily } from '@/api';

const ListCities = () => {
  const listCities = document.createElement('div');
  listCities.classList.add('list-cities');

  listCities.insertAdjacentHTML(
    'beforeend',
    `<h2>Список введенных городов</h2>
          <div class="cities-wrapper"></div>
          `
  );

  observer.subscribe((data) => {
    const cities = listCities.querySelector('.cities-wrapper');
    cities.innerHTML = null;

    if (data.length > 0) {
      data.forEach((el) => {
        const btn = document.createElement('button');
        btn.classList.add('cities-btn');
        btn.type = 'button';
        btn.textContent = el;
        cities.insertAdjacentElement('beforeend', btn);

        btn.addEventListener('click', async () => {
          const city = await apiGetCity(el);
          const cityFormatted = city.map((item) => ({
            city: item.name,
            latitude: item.latitude,
            longitude: item.longitude,
          }))[0];
          const weather = await getWeatherDaily(cityFormatted);
          observer.notify({ city: cityFormatted, weather }, 'api');
          observer.notify(
            [cityFormatted.latitude, cityFormatted.longitude],
            'maps'
          );
          observer.notify('cities', 'ui');
        });
      });
    } else {
      cities.textContent = 'Вы еще не ввели ни одного города';
    }
  }, 'add-cities');

  return listCities;
};

export default ListCities;
