import { useState } from "react";
import { getWeatherByCity } from "./api/weatherApi";
import WeatherCard from "./components/WeatherCard";

export default function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWeather = async () => {
    if (!city) return;

    setLoading(true);
    setError("");
    setWeather(null);

    try {
      const data = await getWeatherByCity(city);
      setWeather(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center text-white px-4">
      <div className="w-full max-w-md bg-slate-900/70 backdrop-blur-md p-6 rounded-2xl shadow-xl">

        <h1 className="text-2xl font-bold text-center mb-6">
          🌦 Weather Info Dashboard
        </h1>

        <div className="flex gap-2 mb-4">
          <input
            type="text"
            placeholder="Enter city name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="flex-1 px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
          <button
            onClick={fetchWeather}
            className="px-4 py-2 rounded-lg bg-sky-500 hover:bg-sky-600 transition font-semibold"
          >
            Search
          </button>
        </div>

        {loading && (
          <p className="text-center text-yellow-400 animate-pulse">
            Loading weather...
          </p>
        )}

        {error && (
          <p className="text-center text-red-400 font-medium">
            {error}
          </p>
        )}

        {weather && <WeatherCard weather={weather} />}
      </div>
    </div>
  );
}
