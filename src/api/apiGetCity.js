export async function apiGetCity(city) {
  try {
    const response = await fetch(`${process.env.CITY_URL}/?name=${city}`, {
      method: 'GET',
      headers: { 'X-Api-Key': process.env.CITY_KEY },
    });
    return response.json();
  } catch (e) {
    console.log(e.message);
  }
}
