import TitleLineWeather from './TitleLineWeather';

describe('Testing title-line-weather', () => {
  let app;

  beforeEach(() => {
    app = document.createElement('div');
  });

  it('', () => {
    const titleLineWeather = TitleLineWeather();
    app.insertAdjacentElement('beforeend', titleLineWeather);

    const title = app.querySelector('.title-content');
    expect(title.textContent).toBe('Days');
  });
});
