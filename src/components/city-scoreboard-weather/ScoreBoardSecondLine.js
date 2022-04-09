import { observer } from '@/app';

const ScoreBoardSecondLine = () => {
  const scoreboardSecondLine = document.createElement('div');
  scoreboardSecondLine.classList.add('scoreboard-second-line');

  scoreboardSecondLine.insertAdjacentHTML(
    'afterbegin',
    `<div class="temp-weather">
            <span class="temp-value">
              26
            </span>
            <span class="temp-ext">C<sup class="temp-c">0</sup></span>
          </div>
          `
  );

  observer.subscribe(({ weather }) => {
    const tempWeather = scoreboardSecondLine.querySelector(
      '.temp-weather > .temp-value'
    );
    tempWeather.textContent = `${Math.round(weather.current.temp)}`;
  });

  return scoreboardSecondLine;
};

export default ScoreBoardSecondLine;
