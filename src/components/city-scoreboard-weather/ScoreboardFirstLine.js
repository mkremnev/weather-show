import { observer } from '@/app';

const ScoreboardFirstLine = () => {
  const scoreboardFirstLine = document.createElement('div');
  scoreboardFirstLine.classList.add('scoreboard-first-line');

  scoreboardFirstLine.insertAdjacentHTML(
    'afterbegin',
    `<div class="first-line-item humidity-weather">
            <div class="item-title">
              <i class="icon-title humidity"></i>
              <div class="title-text">Humidity</div>
            </div>
            <div class="item-value">69 %</div>
          </div>
          <div class="first-line-item wind-weather">
            <div class="item-title">
              <i class="icon-title wind"></i>
              <div class="title-text">Wind</div>
            </div>
            <div class="item-value">1,5 km</div>
          </div>
         `
  );

  observer.subscribe(({ weather }) => {
    const humidity = scoreboardFirstLine.querySelector(
      '.humidity-weather > .item-value'
    );
    const wind = scoreboardFirstLine.querySelector(
      '.wind-weather > .item-value'
    );

    humidity.textContent = `${Math.round(weather.current.humidity)} %`;
    wind.textContent = `${Math.round(weather.current.wind_speed)} km`;
  });

  return scoreboardFirstLine;
};

export default ScoreboardFirstLine;
