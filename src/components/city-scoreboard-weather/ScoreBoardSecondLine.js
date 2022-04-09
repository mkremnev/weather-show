const ScoreBoardSecondLine = () => {
  const el = document.createElement('div');
  el.classList.add('scoreboard-second-line');

  el.insertAdjacentHTML(
    'afterbegin',
    `<div class="temp-weather">
            26
            <span class="temp-ext">C<sup class="temp-c">0</sup></span>
          </div>
          `
  );

  return el;
};

export default ScoreBoardSecondLine;
