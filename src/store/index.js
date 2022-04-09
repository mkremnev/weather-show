import { getWeatherCurrent } from '@/api/apiGetWeatherCurrent';
import { getWeatherDaily } from '@/api/apiGetWeatherDaily';
import { apiGetGeoLocation } from '@/api/apiGetGeoLocation';
import { apiGetHistory, apiSetHistory } from '@/api/apiLocalStorage';
import { createMap } from '@/api/apiYandexMap';

class Store {
  constructor() {
    this.store = {
      name: '',
      current: {},
      daily: {},
      history: [],
      map: {},
    };
  }

  async actionSetDailyWeather() {
    const data = await getWeatherDaily(this.store.current);
    this.store.daily = data;
  }

  async actionSetCurrent() {
    const data = await getWeatherCurrent(this.store.name);
    this.store.current = data;
  }

  actionSetHistory(data) {
    this.store.history = apiSetHistory(data);
  }

  actionGetHistory() {
    this.store.history = apiGetHistory();
  }

  async actionSetName() {
    const name = await apiGetGeoLocation().then((res) => res.city);
    this.store.name = name ?? 'Moscow';
  }

  actionCreateMap(data) {
    this.map = createMap(data);
  }

  actionSetCenterMap(data) {
    this.map.setCenter(data);
  }
}

export default Store;
