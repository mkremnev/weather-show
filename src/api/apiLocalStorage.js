export function apiGetHistory() {
  const cities = JSON.parse(localStorage.getItem('cities')) ?? [];
  if (cities.length >= 10) {
    cities.slice(0, 10);
  }
  return cities;
}

export function apiSetHistory(city) {
  const cities = JSON.parse(localStorage.getItem('cities')) ?? [];
  const cityLowerName = city.toLowerCase();

  if (!cities.includes(cityLowerName)) {
    if (cities.length >= 10) {
      cities.shift();
    }
    cities.push(cityLowerName);
    localStorage.setItem('cities', JSON.stringify(cities));
  }

  return cities;
}
