import React, { useState, useEffect } from "react";
import "./Home.css";
import axios from 'axios';

const Home = () => {

  const [restaurantName, setRestaurantName] = useState('noname');
  const [restaurantRating, setRestaurantRating] = useState('0');
  const [restaurantReview, setRestaurantReview] = useState('noreview');
  const [restaurantCity, setRestaurantCity] = useState('nocity');
  const [city, setCity] = useState('nocity');
  const [cityRestaurants, setCityRestaurants] = useState([]);
  const [highlight, setHighlight] = useState({});
  const [reviews, setReviews] = useState([]);

  const submitReview = () => {
    axios.post('http://localhost:5000/api/submitReview', {
      restaurantName: restaurantName,
      restaurantRating: restaurantRating,
      restaurantReview: restaurantReview,
      restaurantCity: restaurantCity
    }).then(() => {
      alert('A review was successfully submitted.')
    })
  };

  const searchByCity = () => {
    axios.get('http://localhost:5000/api/reviews/city', {
      headers: {
        city: `${city}`
      }
    }).then((response) => {
      setCityRestaurants(response.data);
    })
  }

  useEffect(() => {
    axios.get('http://localhost:5000/api/reviews/highlight').then((response) => {
      setHighlight(response.data[0]);
    })
  }, [])

  useEffect(() => {
    axios.get('http://localhost:5000/api/reviews/all').then((response) => {
      setReviews(response.data[0]);
    })
  }, [])




  return (

    <body>
      <nav class="navbar navbar-expand-lg navbar-light  py-3 ">
        <div class="container px-4 px-lg-5 ">
          <a className="navbar-brand text-white" href="#page-top">food.io</a>
          <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
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
                  <div class="d-grid"><button class="btn btn-primary btn-xl" id="submitButton" type="submit" onClick={submitReview}>Submit your review</button></div>

                </form>

              </div>
            </div>
          </div>
        </div>

        <div class="container py-5 px-lg-5 ">
          <div class="row justify-content-md-center">
            <div class="col-md-5">
              <div class="jumbotron text-center align-items-center text-white ">
                <h1 class="display-4">Find local restaurants</h1>
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


        <div class="container py-5 px-lg-5 ">
          <div class="row justify-content-md-center">
            <div class="col-md-5">
              <div class="jumbotron text-center align-items-center text-white ">
                <h1 class="display-4">Highlight Review</h1>
                <blockquote class="blockquote text-center">
                  <p class="mb-3">{highlight.restaurant_review}</p>
                  <footer class="blockquote-footer">{highlight.restaurant_name}, <cite title="Source Title">{highlight.restaurant_city}</cite></footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>

      </section>

      <footer class="py-3">

        <div class="container px-4 px-lg-5">
          <div class="small text-center text-muted">Copyright &copy; 2023 - food.io - Piotr Narożny & Patryk Nowak
          </div>
        </div>
      </footer>
    </body>
  );
}

export default Home;
