export async function getWeatherCurrent(city) {
  try {
    const response = await fetch(
      `${process.env.WEATHER_URL}weather?q=${city}&appid=${process.env.WEATHER_KEY}&units=metric`
    );
    return response.json();
  } catch (e) {
    console.log(e.message);
  }
}
