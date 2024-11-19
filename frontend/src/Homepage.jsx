import React, { useState, useEffect } from 'react';
import './App.css';
import Icon from '@mdi/react';
import { mdiMenu, mdiWeatherSunny, mdiWeatherCloudy, mdiWeatherSnowyHeavy, mdiWeatherRainy, mdiWeatherLightningRainy } from '@mdi/js';
import dayjs from 'dayjs';

function Homepage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5984/helios/_all_docs?include_docs=true')
            .then((response) => response.json())
            .then((data) => {
                setData(data.rows.map((row) => row.doc));
                setFilteredData(data.rows.map((row) => row.doc));
            })
            .catch((error) => {
                setError(error);
                console.error('Error fetching data:', error);
            });
    }, []);

    const handleSearch = (event) => {
        if (event.key === 'Enter') {
            const query = searchQuery.trim().toLowerCase();
            const result = data.filter((forecast) =>
                forecast.city.toLowerCase().includes(query)
            );
            setFilteredData(result);
        }
    };

    return (
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

            <div className="WeatherTable">
                <input
                    className="SearchBar"
                    type="text"
                    placeholder="Recherchez une ville..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={handleSearch}
                    aria-label="Recherchez une ville"
                />
                <div className="CityWrapper">
                    {error ? (
                        <p>Error fetching data: {error.message}</p>
                    ) : (
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
                                    <tr key={index}>
                                        <td>{forecast.city}</td>
                                        <td>{dayjs(forecast.date).format('DD/MM/YYYY')}</td>
                                        <td>{forecast.morningTemperature}</td>
                                        <td>{forecast.afternoonTemperature}</td>
                                        <td>{forecast.eveningTemperature}</td>
                                        <td>{forecast.humidity}</td>
                                        <td>
                                            {forecast.condition.toLowerCase() === 'sunny' && (
                                                <Icon path={mdiWeatherSunny} size={1} />
                                            )}
                                            {forecast.condition.toLowerCase() === 'snowy' && (
                                                <Icon path={mdiWeatherSnowyHeavy} size={1} />
                                            )}
                                            {forecast.condition.toLowerCase() === 'cloudy' && (
                                                <Icon path={mdiWeatherCloudy} size={1} />
                                            )}
                                            {forecast.condition.toLowerCase() === 'rainy' && (
                                                <Icon path={mdiWeatherRainy} size={1} />
                                            )}
                                            {forecast.condition.toLowerCase() === 'stormy' && (
                                                <Icon path={mdiWeatherLightningRainy} size={1} />
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Homepage;