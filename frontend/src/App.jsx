

import './App.css'
 
import data from './assets/sample_data.json';
function App() {

  return (
    <>
    <div>
      <h1>Météo Forecast</h1>
      {data.forecasts.map((forecast, index) => (
        <div key={index}>
          <h2>Ville: {forecast.city}</h2>
          <h3>Prévisions quotidiennes:</h3>
          <ul>
            {forecast.dailyForecasts.map((dailyForecast, idx) => (
              <li key={idx}>
                Date: {dailyForecast.date} - Température: {dailyForecast.temperature}°C, 
                Condition: {dailyForecast.condition}, 
                Vitesse du vent: {dailyForecast.windSpeed} km/h, 
                Humidité: {dailyForecast.humidity}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
      
    </>
  )
}

export default App
