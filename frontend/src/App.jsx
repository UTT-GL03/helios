import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import reactLogo from './assets/favicon.svg'
import Homepage from './Homepage'
import ProPage from './ProPage'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <header>
        <Link to="/">
          <h1>
            HELIOS
          </h1>
        </Link>
      </header>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/pro" element={<ProPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
