import { BrowserRouter, Routes, Route } from 'react-router-dom'
import reactLogo from './assets/favicon.svg'
import Homepage from './Homepage'
import ProPage from './ProPage'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/pro" element={<ProPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
