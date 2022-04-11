import { observer } from '@/app';
import CityForm from './CityForm';
import ListCities from './ListCities';

const InsertCityModal = () => {
  const cityForm = CityForm();
  const listCities = ListCities();
  const modal = document.createElement('div');
  modal.classList.add('insert-city-modal');

  modal.insertAdjacentElement('afterbegin', cityForm);
  modal.insertAdjacentElement('beforeend', listCities);

  observer.subscribe((type) => {
    if (type === 'cities') {
      modal.classList.toggle('open');
    }
  }, 'ui');

  return modal;
};

export default InsertCityModal;
