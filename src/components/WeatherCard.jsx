export default function WeatherCard({ weather }) {
  return (
    <div className="mt-6 bg-slate-800 p-4 rounded-xl text-center space-y-2">
      <h2 className="text-xl font-semibold">
        {weather.name}
      </h2>
      <p>
        🌡 Temperature:
        <span className="font-medium"> {weather.main.temp}°C</span>
      </p>
      <p>
        💧 Humidity:
        <span className="font-medium"> {weather.main.humidity}%</span>
      </p>
      <p>
        ☁ Condition:
        <span className="capitalize font-medium"> {weather.weather[0].description}</span>
      </p>
    </div>
  );
}
