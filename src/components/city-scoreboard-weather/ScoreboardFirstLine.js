const ScoreboardFirstLine = () => {
  const el = document.createElement('div');
  el.classList.add('scoreboard-first-line');

  el.insertAdjacentHTML(
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

  return el;
};

export default ScoreboardFirstLine;
