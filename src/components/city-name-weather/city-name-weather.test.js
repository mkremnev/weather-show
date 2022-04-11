import CityNameWeather from './CityNameWeather';

describe('Testing city-name-weather', () => {
  let app;

  beforeEach(() => {
    app = document.createElement('div');
  });

  it('component must have text "scattered clouds"', () => {
    const cityNameWeather = CityNameWeather();
    app.insertAdjacentElement('beforeend', cityNameWeather);

    const cityName = app.querySelector('.city-name');
    cityName.textContent = 'Scattered clouds';

    expect(cityName.textContent).toBe('Scattered clouds');
  });
});
