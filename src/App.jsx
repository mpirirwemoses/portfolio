import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Port from './Components/port'
import Contact  from './Components/Contact'
import { BrowserRouter as  Routes, Route } from 'react-router-dom';

function App() {
  
  return(
    
    
      <Routes>
        <Route path="/" element={<Port />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    
   
  )
}

export default App
