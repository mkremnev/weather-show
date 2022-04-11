export async function apiYandexMap() {
  return new Promise((resolve, reject) => {
    const scriptElement = document.createElement('script');
    scriptElement.onload = resolve;
    scriptElement.onerror = reject;
    scriptElement.type = 'text/javascript';
    scriptElement.src = `${process.env.MAP_URL}?lang=ru_RU&apikey=${process.env.MAP_KEY}`;
    document.body.appendChild(scriptElement);
  }).then(() => {
    return new Promise((resolve) => ymaps.ready(resolve));
  });
}

export function createMap(state) {
  const map = new ymaps.Map('map', state);
  return map;
}
