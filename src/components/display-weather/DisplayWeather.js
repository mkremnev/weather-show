import HeaderWeather from '../header-weather/HeaderWeather';
import CityNameWeather from '../city-name-weather/CityNameWeather';
import CityScoreBoard from '../city-scoreboard-weather/CityScoreBoard';
import TitleLineWeather from '../title-line-weather/TitleLineWeather';
import TempDaysWeather from '../temp-days-weather/TempDaysWeather';
import NavWeather from '../nav-weather/NavWeather';

const DisplayWeather = () => {
  const el = document.createElement('div');
  el.classList.add('display-weather');

  const headerWeather = HeaderWeather();
  const cityNameWeather = CityNameWeather();
  const cityScoreBoard = CityScoreBoard();
  const titleLineWeather = TitleLineWeather();
  const tempDaysWeather = TempDaysWeather();
  const navWeather = NavWeather();

  const contentWeather = document.createElement('div');
  contentWeather.classList.add('content-weather');
  contentWeather.insertAdjacentElement('afterbegin', headerWeather);
  contentWeather.insertAdjacentElement('beforeend', cityNameWeather);
  contentWeather.insertAdjacentElement('beforeend', cityScoreBoard);
  contentWeather.insertAdjacentElement('beforeend', titleLineWeather);
  contentWeather.insertAdjacentElement('beforeend', tempDaysWeather);
  contentWeather.insertAdjacentElement('beforeend', navWeather);

  el.insertAdjacentElement('afterbegin', contentWeather);
  return el;
};

export default DisplayWeather;
