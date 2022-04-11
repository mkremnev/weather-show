const DaysItemWeather = ({ icon, temp, day }) => {
  const item = document.createElement('div');
  item.classList.add('days-item-weather');
  item.insertAdjacentHTML(
    'beforeend',
    `<div class="day-name">${day}</div>
            <div class="day-icon">
              <img src="${icon}" alt="" />
            </div>
            <div class="day-temp">
              ${temp}
              <span class="day-temp-ext">
                C
                <sup class="day-temp-c">0</sup>
              </span>
            </div>`
  );

  return item;
};

export default DaysItemWeather;
