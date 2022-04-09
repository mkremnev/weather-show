export async function getWeatherDaily(city) {
  try {
    const response = await fetch(
      `${process.env.WEATHER_URL}onecall?lat=${city?.latitude}&lon=${city?.longitude}&exclude=minutely,hourly&appid=${process.env.WEATHER_KEY}&units=metric`
    );
    return response.json();
  } catch (e) {
    console.log(e.message);
  }
}
