const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export const getWeatherByCity = async (city) => {
  const response = await fetch(
    `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`
  );

  if (response.status === 404) {
    throw new Error("Invalid city name");
  }

  if (response.status === 429) {
    throw new Error("API limit exceeded");
  }

  if (!response.ok) {
    throw new Error("Network error");
  }

  return response.json();
};
