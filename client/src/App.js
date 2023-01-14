import React, { useState, useEffect } from "react";
import "./App.css";
import Axios from 'axios'

function App() {

  const [restaurantName, setRestaurantName] = useState('');
  const [restaurantRating, setRestaurantRating] = useState('');
  const [restaurantReview, setRestaurantReview] = useState('');
  const [restaurantCity, setRestaurantCity] = useState('');
  const [city, setCity] = useState('');

  const submitReview = () => {
    Axios.post('http://localhost:5000/api/submitReview', {
      restaurantName: restaurantName,
      restaurantRating: restaurantRating,
      restaurantReview: restaurantReview,
      restaurantCity: restaurantCity
    }).then(() => {
      alert('A review was successfully submitted.')
    })
  };

  const searchByCity = () => {
    Axios.get('http://localhost:5000/api/reviews/city', {
      city: city
    })
  };


  return (

    <>
      <body>

        <nav class="navbar navbar-expand-lg navbar-light  py-3 ">
          <div class="container px-4 px-lg-5 ">
            <a class="navbar-brand text-white" href="#page-top">Food.io</a>
            <button class="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
              <ul class="navbar-nav ms-auto my-2 my-lg-0">
                <li class="nav-item"><a class="nav-link text-white" href="#about">About</a></li>
                <li class="nav-item"><a class="nav-link text-white" href="#ratings">Ratings</a></li>
                <li class="nav-item"><a class="nav-link text-white" href="#contact">Contact</a></li>
              </ul>
            </div>
          </div>
        </nav>

        <section class="page-section mb-5" id="ratings">
        <div class="container py-5 px-lg-5">
        <div class="row justify-content-md-center">
        <div class="col col-lg-5">
          <div class="jumbotron text-center align-items-center text-white ">
            <h1 class="display-4">Leave a review</h1>
            <p class="lead">Found a good place to eat? Share it with us!</p>
            <form id="ratingsForm" data-sb-form-api-token="API_TOKEN">
                  <div class="form-group mb-3">
                    <input class="form-control mb-3" placeholder="Restaurant name" type="text" id="name" data-sb-validations="required" required onChange={(e) => { setRestaurantName(e.target.value) }} />
                    <div class="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                  </div>

                  <div class="form-group mb-3">
                    <input class="form-control mb-3" placeholder="City" type="text" id="city" data-sb-validations="required" required onChange={(e) => { setRestaurantCity(e.target.value) }} />
                    <div class="invalid-feedback" data-sb-feedback="city:required">A city is required.</div>
                  </div>

                  <div class="form-group mb-3">
                    <select class="form-select" id="rating" required onChange={(e) => { setRestaurantRating(e.target.value) }}>
                      <option value="" disabled selected>Select your rating</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </div>

                  <div class="form-group mb-3">
                  <textarea class="form-control" placeholder="Review" id="review" rows="5" data-sb-validations="required" required onChange={(e) => { setRestaurantReview(e.target.value) }} />
                    <div class="invalid-feedback" data-sb-feedback="review:required">A review is required.</div>
                  </div>
                  <div class="d-grid"><button class="btn btn-primary btn-xl" id="submitButton" type="submit" onClick={submitReview}>Submit your rating</button></div>

                </form>
			
            </div>
          </div>
          </div>
        </div>

        <div class="container py-5 px-lg-5 ">
        <div class="row justify-content-md-center">
        <div class="col-md-5">
          <div class="jumbotron text-center align-items-center text-white ">
            <h1 class="display-4">Ratings</h1>
            <p class="lead">Choose your city to find the best places to eat.</p>
			
			
          <form id="searchForm" data-sb-form-api-token="API_TOKEN">
          <div class="form-group mb-3">
                    <input class="form-control mb-3" placeholder="City" type="text" id="city" data-sb-validations="required" required onChange={(e) => { setCity(e.target.value) }} />
                    <div class="invalid-feedback" data-sb-feedback="city:required">A city is required.</div>
                    </div>
            <div class="d-grid"><button class="btn btn-primary btn-xl" id="submitButton" type="submit" onClick={searchByCity}>Find best food</button></div>
          </form>
			
          </div>
          </div>
          </div>
        </div>
        </section>

        <footer class="py-3">
          <div class="container px-4 px-lg-5">
            <div class="small text-center text-muted">Copyright &copy; 2023 - Food.io
            </div>
          </div>
        </footer>

      </body>
    </>
  );
}

export default App;
