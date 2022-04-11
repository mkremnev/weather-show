import { observer } from '@/app';
import { createMap } from '@/api/apiYandexMap';

const MapsModal = () => {
  const modal = document.createElement('div');
  modal.classList.add('maps-modal');

  modal.insertAdjacentHTML('afterbegin', '<div id="map"></div>');

  observer.subscribe(({ city }) => {
    window.map = createMap({
      center: [city.latitude, city.longitude],
      zoom: 10,
    });
  }, 'createMap');

  observer.subscribe((coords) => {
    console.log(coords);
    window.map.panTo(coords);
  }, 'maps');

  observer.subscribe((type) => {
    if (type === 'maps') {
      modal.classList.toggle('open');
    }
  }, 'ui');

  return modal;
};

export default MapsModal;
