import React, { useState, useEffect, useMemo } from 'react';
import './App.css';
import Icon from '@mdi/react';
import { mdiWeatherSunny, mdiWeatherCloudy, mdiWeatherSnowyHeavy, mdiWeatherRainy, mdiWeatherLightningRainy } from '@mdi/js';
import dayjs from 'dayjs';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function Homepage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    const fetchPageData = (query = '', page = 1, limit = 10) => {
        setLoading(true);

        const body = query
            ? {
                selector: {
                    city: { "$regex": `(?i)${query}` },
                },
                sort: [{ "date": "asc" }],
                fields: ["_id", "city", "date", "morningTemperature", "afternoonTemperature", "eveningTemperature", "humidity", "condition"],
                skip: (page - 1) * limit,
                limit,
            }
            : {
                selector: {
                    "_id": { "$gt": null }
                },
                sort: [{ "date": "asc" }],
                fields: ["_id", "city", "date", "morningTemperature", "afternoonTemperature", "eveningTemperature", "humidity", "condition"],
                skip: (page - 1) * limit,
                limit,
            };

        fetch('http://localhost:5984/helios/_find', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Erreur HTTP! statut: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                if (data.docs && data.docs.length > 0) {
                    setData((prevData) => (page === 1 ? data.docs : [...prevData, ...data.docs]));
                    setHasMore(data.docs.length === limit);
                } else if (page === 1) {
                    setData([]);
                    setError(new Error('Aucun résultat trouvé'));
                    setHasMore(false);
                }
            })
            .catch((error) => {
                setError(error);
                console.error('Erreur lors du chargement des données:', error);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchPageData(searchQuery, 1);
    }, [searchQuery]);

    const handleLoadMore = () => {
        if (hasMore && !loading) {
            const nextPage = currentPage + 1;
            setCurrentPage(nextPage);
            fetchPageData(searchQuery, nextPage);
        }
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value.trim());
        setCurrentPage(1);
        setHasMore(true);
    };

    const tableRows = useMemo(() => {
        return data.map((forecast, index) => (
            <tr key={index}>
                <td>{forecast.city}</td>
                <td>{dayjs(forecast.date).format('DD/MM/YYYY')}</td>
                <td>{forecast.morningTemperature + "°"}</td>
                <td>{forecast.afternoonTemperature + "°"}</td>
                <td>{forecast.eveningTemperature + "°"}</td>
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
                <td>{forecast.humidity}</td>
            </tr>
        ));
    }, [data]);

    return (
        <div>
            <Navbar />
            <div className="WeatherTable">
                <input
                    className="SearchBar"
                    type="text"
                    placeholder="Recherchez une ville..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    aria-label="Recherchez une ville"
                />
                <div className="CityWrapper">
                    {error ? (
                        <p>Erreur lors du chargement des données: {error.message}</p>
                    ) : (
                        <table>
                            <thead>
                                <tr>
                                    <th>Ville</th>
                                    <th>Date</th>
                                    <th>Matin</th>
                                    <th>Après-midi</th>
                                    <th>Soirée</th>
                                    <th>Condition</th>
                                    <th>Humidité</th>
                                </tr>
                            </thead>
                            <tbody>{tableRows}</tbody>
                        </table>
                    )}
                    {loading && <p>Chargement...</p>}
                    {hasMore && !loading && (
                        <button onClick={handleLoadMore} className="LoadMore">
                            Charger plus
                        </button>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Homepage;
