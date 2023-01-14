import React, { useState, useEffect } from "react";
import "./App.css";

import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Views/Home/Home';
import About from './Views/About/About';
import CityView from './Views/CityView/CityView';


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/cityview" element={<CityView />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}


export default App;