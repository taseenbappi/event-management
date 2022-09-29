import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import CreateEvent from './Pages/CreateEvent';
import Events from './Pages/Events';
import LandingPage from './Pages/LandingPage';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/create" element={<CreateEvent />} />
        <Route path="/event" element={<Events />} />
      </Routes>
    </div>
  );
}

export default App;
