import React, { useState } from 'react';
import axios from 'axios';

export default function AddReviewView() {

    const [restaurantName, setRestaurantName] = useState('noname');
    const [restaurantRating, setRestaurantRating] = useState('0');
    const [restaurantReview, setRestaurantReview] = useState('noreview');
    const [restaurantCity, setRestaurantCity] = useState('nocity');

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

    const handleSubmit = event => {
        event.preventDefault();
        console.log('form submitted');
    }

    return (
        <div class="container py-5 px-lg-5">
            <div class="row justify-content-md-center">
                <div class="col col-lg-5">
                    <div class="jumbotron text-center align-items-center text-white ">
                        <h1 class="display-4">Leave a review</h1>
                        <p class="lead">Found a good place to eat? Share it with us!</p>
                        <form onSubmit={handleSubmit} id="ratingsForm" data-sb-form-api-token="API_TOKEN">
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
    );
}