const TitleLineWeather = () => {
  const el = document.createElement('div');
  el.classList.add('title-line-weather');

  el.insertAdjacentHTML('afterbegin', '<div class="title-content">Days</div>');

  return el;
};

export default TitleLineWeather;
