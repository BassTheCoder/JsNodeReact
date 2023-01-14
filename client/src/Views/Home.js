import React, { useState, useEffect } from "react";
import axios from 'axios';

const HomeView = () => {

  const [highlight, setHighlight] = useState({});

  useEffect(() => {
    axios.get('http://localhost:5000/api/reviews/highlight').then((response) => {
      setHighlight(response.data[0]);
    })
  }, [])

  return (

    <body>
      <section class="page-section mb-5" id="ratings">

        <div class="container py-5 px-lg-5">
          <div class="row justify-content-md-center">
            <div class="col-md-12">
              <div class="jumbotron text-center align-items-center text-white ">
                <h1 class="display-1">welcome to food.io</h1>
                <h2 class="display-5">feel free to explore</h2>
              </div>
            </div>
          </div>
        </div>

        <div class="container py-5 px-lg-5">
          <div class="row justify-content-md-center">
            <div class="col-md-8">
              <div class="jumbotron text-center align-items-center text-white ">
                <p class="display-4">Latest 5/5 review</p>
                <blockquote class="blockquote text-center">
                  <p class="mb-3">{highlight.restaurant_review}</p>
                  <footer class="blockquote-footer">{highlight.restaurant_name}, <cite title="Source Title">{highlight.restaurant_city}</cite></footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>

      </section>
    </body>
  );
}

export default HomeView;
