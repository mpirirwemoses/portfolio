import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Port from './Components/port'
import Contact from './Components/Contact'
import './App.css'
function App() {
  return (
    <BrowserRouter basename="/portfolio">
      <Routes>
        <Route path="/" element={<Port />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
