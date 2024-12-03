import './App.css';
import { LineChart } from '@mui/x-charts/LineChart';
import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';

function ProPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [chartData, setChartData] = useState([]);
  const [dates, setDates] = useState([]);
  
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
        fields: ["_id", "city", "date", "morningTemperature", "afternoonTemperature", "eveningTemperature"],
        limit: 2000

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
        } else {
          setError(new Error('No matching documents found'));
        }
      })
      .catch((error) => {
        setError(error);
        console.error('Error fetching data:', error);
      });
  }, []);

  function parseDate(dateString) {
    return dayjs(dateString).format('MDD');
}

  useEffect(() => {
    if (searchQuery && data.length > 0) {
      const filteredData = data.filter((doc) => doc.city.toLowerCase() === searchQuery.toLowerCase());

      if (filteredData.length > 0) {
        // Sort by date
        const sortedData = filteredData.sort((a, b) => new Date(a.date) - new Date(b.date));
        
          // Define the start and end dates for the week of November 11, 2024
          const startDate = new Date('2024-11-10');
          const endDate = new Date('2024-11-16');
  
          // Filter the data to include only dates within the specified week
          const weekData = sortedData.filter((doc) => {
            const docDate = new Date(doc.date);
            return docDate >= startDate && docDate <= endDate;
          });


        // Prepare chart data
        const dates = weekData.map((doc) => parseDate(doc.date));
        const morningTemps = weekData.map((doc) => parseFloat(doc.morningTemperature));
        const afternoonTemps = weekData.map((doc) => parseFloat(doc.afternoonTemperature));
        const eveningTemps = weekData.map((doc) => parseFloat(doc.eveningTemperature));

        setDates(dates);
        setChartData([
          { name: 'Morning', data: morningTemps },
          { name: 'Afternoon', data: afternoonTemps },
          { name: 'Evening', data: eveningTemps },
        ]);
      } else {
        setChartData([]);
      }
    }
  }, [searchQuery, data]);

  return (
    
    <div>
    
      <input
        type="text"
        placeholder="Enter city name"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {error && <p style={{ color: 'red' }}>{error.message}</p>}

      {chartData.length > 0 ? (
        <LineChart
        xAxis={[{ 
            data: dates ,
            tickNumber: 2, 
            valueFormatter: (value, context) => {
                if (context.location === 'tick') {
                  // On formate chaque valeur de date ici en prenant les 3 premiers caractères
                  return `${String(value).slice(0,1)}/${String(value).slice(1,3)} `  // Exemple de format MDD => Mois-Jour
                } else {
                  return value;  // Retourne la valeur brute si ce n'est pas un tick
                }
              },
   
        }]}
        series={ chartData.map((serie) => (
            console.log(dates),{
            data: serie.data, 
            showMark: true,
            label: serie.name,
          }))}
          height={600}
        />      ) : (
        <p>No data to display</p>
      )}
    </div>
  );
}

export default ProPage;
