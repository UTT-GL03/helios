
import './App.css';
import { LineChart } from 'react-chartkick'
import 'chartkick/chart.js'

function WeatherGraph() {
    return (
        <LineChart data={{"2025-05-13": 2, "2025-05-14": 5,"2025-05-15":3 }} />
    )
}

export default WeatherGraph;