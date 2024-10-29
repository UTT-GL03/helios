
import './App.css';
import data from './assets/sample_data.json';
import Icon from '@mdi/react';
import { mdiMenu } from '@mdi/js';

function Homepage() {
    return (
        <>
            <div className=''>
                <nav className='NavBar'>
                    <ul>
                        <button className='ProButton' onClick={event =>  window.location.href='/pro'} >
                            Pro +
                        </button>
                    </ul>
                    <ul>
                        <button className='NavBarButton'><Icon path={mdiMenu} size={1} /></button>
                    </ul>
                </nav>

                <div className='WeatherTable'>
                    <input className='SeachBar' type="text" name="text" placeholder="Recherchez une ville..." aria-label="Text" />
                    <div className='CityWrapper'>
                        <table>
                            <thead>
                                <tr>
                                    <th>Ville</th>
                                    <th>Date</th>
                                    <th>Température MATIN (°C)</th>
                                    <th>Température APREM (°C)</th>
                                    <th>Température SOIREE (°C)</th>
                                    <th>Condition</th>
                                    <th>Humidité</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.forecasts.map((forecast, index) => (
                                    forecast.dailyForecasts.map((dailyForecast, idx) => (
                                        idx == 0 ?
                                        <tr key={`${index}-${idx}`}>
                                            <td>{forecast.city}</td>
                                            <td>{dailyForecast.date}</td>
                                            <td>{dailyForecast.morningTemperature}</td>
                                            <td>{dailyForecast.afternoonTemperature}</td>
                                            <td>{dailyForecast.eveningTemperature}</td>
                                            <td>{dailyForecast.condition}</td>
                                            <td>{dailyForecast.humidity}</td>
                                        </tr>
                                        : null
                                    ))
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Homepage;