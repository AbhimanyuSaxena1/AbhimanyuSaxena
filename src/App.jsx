import React from 'react'
import Loader from './components/loader'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import EarnMore from './pages/EarnMore'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/earn-more" element={<EarnMore />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App