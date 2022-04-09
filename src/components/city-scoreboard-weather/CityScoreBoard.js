import IconWeather from './IconWeather';
import ScoreboardFirstLine from './ScoreboardFirstLine';
import ScoreBoardSecondLine from './ScoreBoardSecondLine';

const CityScoreBoard = () => {
  const el = document.createElement('div');
  el.classList.add('city-scoreboard-weather');

  const iconWeather = IconWeather();
  const scoreboardFirstLine = ScoreboardFirstLine();
  const scoreBoardSecondLine = ScoreBoardSecondLine();

  el.insertAdjacentElement('afterbegin', iconWeather);
  el.insertAdjacentElement('beforeend', scoreboardFirstLine);
  el.insertAdjacentElement('beforeend', scoreBoardSecondLine);

  return el;
};

export default CityScoreBoard;
