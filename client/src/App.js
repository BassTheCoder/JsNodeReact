import "./App.css";

import React from "react";
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

import HomeView from './Views/Home';
import About from './Views/About';
import Contact from "./Views/Contact";
import CityView from './Views/CityView';
import RestaurantReviewsView from "./Views/RestaurantReviews";
import AdminView from "./Views/AdminView";
import AddReviewView from "./Views/AddReview";
import EditReviewView from "./Views/EditView";
import NoMatch from "./Views/NoMatch";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/reviews/add" element={<AddReviewView />} />
          <Route path="/review/edit" element={<EditReviewView />} />
          <Route path="/reviews/restaurants/city" element={<CityView />} />
          <Route path="/reviews/restaurant" element={<RestaurantReviewsView />} />
          <Route path="/admin" element={<AdminView />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;