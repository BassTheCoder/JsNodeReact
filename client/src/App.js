import "./App.css";

import React, { useState, useEffect } from "react";
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

import Home from './Views/Home/Home';
import About from './Views/About/About';
import CityView from './Views/CityView/CityView';

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cityview" element={<CityView />} />
        </Routes>
      </Router>
    </>
  );
}


export default App;