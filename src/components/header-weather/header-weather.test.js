import HeaderWeather from './HeaderWeather';

describe('Testing header-weather', () => {
  let app;

  beforeEach(() => {
    app = document.createElement('div');
  });

  it('component must have text "Paris"', () => {
    const headerWeather = HeaderWeather();
    app.insertAdjacentElement('beforeend', headerWeather);

    const headerTitle = app.querySelector('.header-title');
    headerTitle.textContent = 'Paris';

    expect(headerTitle.textContent).toBe('Paris');
  });
});
