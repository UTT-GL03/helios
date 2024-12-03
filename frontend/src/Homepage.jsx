import React, { useState, useEffect } from 'react';
import './App.css';
import Icon from '@mdi/react';
import { mdiWeatherSunny, mdiWeatherCloudy, mdiWeatherSnowyHeavy, mdiWeatherRainy, mdiWeatherLightningRainy } from '@mdi/js';
import dayjs from 'dayjs';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function Homepage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5984/helios/_find', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                selector: {
                    "_id": {
                        "$gt": null
                    }
                },
                sort: [{"date": "asc"}, {"city": "asc"}],
                fields: ["_id", "city", "date", "morningTemperature", "afternoonTemperature", "eveningTemperature", "humidity", "condition"],
                limit: 10
            })
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                if (data.docs && data.docs.length > 0) {
                    setData(data.docs);
                    setFilteredData(data.docs);
                } else {
                    setError(new Error('No matching documents found'));
                }
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
            <Navbar />

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
                                    <th>Humidité</th>
                                    <th>Condition</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredData.map((forecast, index) => (
                                    <tr key={index}>
                                        <td>{forecast.city}</td>
                                        <td>{dayjs(forecast.date).format('DD/MM/YYYY')}</td>
                                        <td>{forecast.morningTemperature + "°"}</td>
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
            <Footer />
        </div>
    );
}

export default Homepage;
