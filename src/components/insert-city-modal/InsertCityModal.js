import { observer } from '@/app';
import CityForm from './CityForm';

const InsertCityModal = () => {
  const cityForm = CityForm();
  const modal = document.createElement('div');
  modal.classList.add('insert-city-modal');

  modal.insertAdjacentElement('afterbegin', cityForm);

  observer.subscribe((type) => {
    if (type === 'cities') {
      modal.classList.toggle('open');
    }
  }, 'ui');

  return modal;
};

export default InsertCityModal;
