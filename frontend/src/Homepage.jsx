import React, { useState } from 'react';
import './App.css';
import data from './assets/sample_data.json';
import Icon from '@mdi/react';
import { mdiMenu, mdiWeatherSunny, mdiWeatherCloudy, mdiWeatherSnowyHeavy, mdiWeatherRainy } from '@mdi/js';
import dayjs from 'dayjs';

function Homepage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredData, setFilteredData] = useState(data.forecasts);

    const handleSearch = (event) => {
        if (event.key === 'Enter') {
            const query = searchQuery.trim().toLowerCase();
            const result = data.forecasts.filter(forecast =>
                forecast.city.toLowerCase().includes(query)
            );
            setFilteredData(result);
        }
    };

    return (
        <>
            <div>
                <nav className='NavBar'>
                    <ul>
                        <button className='ProButton' onClick={() => window.location.href = '/pro'}>
                            Pro +
                        </button>
                    </ul>
                    <ul>
                        <button className='NavBarButton'>
                            <Icon path={mdiMenu} size={1} />
                        </button>
                    </ul>
                </nav>

                <div className='WeatherTable'>
                    <input
                        className='SearchBar'
                        type="text"
                        placeholder="Recherchez une ville..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyDown={handleSearch}
                        aria-label="Recherchez une ville"
                    />
                    <div className='CityWrapper'>
                        <table>
                            <thead>
                                <tr>
                                    <th>Ville</th>
                                    <th>Date</th>
                                    <th>Température MATIN (°C)</th>
                                    <th>Température APREM (°C)</th>
                                    <th>Température SOIRÉE (°C)</th>
                                    <th>Condition</th>
                                    <th>Humidité</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredData.map((forecast, index) => (
                                    forecast.dailyForecasts.map((dailyForecast, idx) => (
                                        searchQuery.length > 0 || idx === 0 ? (
                                            <tr key={`${index}-${idx}`}>
                                                <td>{forecast.city}</td>
                                                <td>{dayjs(dailyForecast.date).format('DD/MM/YYYY')}</td>
                                                <td>{dailyForecast.morningTemperature}</td>
                                                <td>{dailyForecast.afternoonTemperature}</td>
                                                <td>{dailyForecast.eveningTemperature}</td>
                                                <td>
                                                    {dailyForecast.condition.toLowerCase() === 'sunny' && <Icon path={mdiWeatherSunny} size={1} />}
                                                    {dailyForecast.condition.toLowerCase() === 'snowy' && <Icon path={mdiWeatherSnowyHeavy} size={1} />}
                                                    {dailyForecast.condition.toLowerCase() === 'cloudy' && <Icon path={mdiWeatherCloudy} size={1} />}
                                                    {dailyForecast.condition.toLowerCase() === 'rainy' && <Icon path={mdiWeatherRainy} size={1} />}
                                                </td>
                                                <td>{dailyForecast.humidity}</td>
                                            </tr>
                                        ) : null
                                    ))
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Homepage;
