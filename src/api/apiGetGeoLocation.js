export async function apiGetGeoLocation() {
  try {
    const response = await fetch(process.env.GEO_URL);
    return response.json();
  } catch (e) {
    console.log(e.message);
  }
}
