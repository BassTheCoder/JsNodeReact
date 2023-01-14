import React, { useState } from 'react';
import axios from 'axios';

export default function RestaurantReviewsView() {

    const [restaurantName, setRestaurantName] = useState('noname');
    const [restaurantReviews, setRestaurantReviews] = useState([]);

    const searchByRestaurant = () => {
        axios.get('http://localhost:5000/api/reviews/restaurant/all', {
            headers: {
                restaurant: `${restaurantName}`
            }
        }).then((response) => {
            setRestaurantReviews(response.data);
        })
    }


    const handleSubmit = event => {
        event.preventDefault();
        console.log('form submitted');
    }

    return (
        <div>
            <div class="container py-5 px-lg-5 ">
                <div class="row justify-content-md-center">
                    <div class="col-md-5">
                        <div class="jumbotron text-center align-items-center text-white ">
                            <h1 class="display-4">Find reviews for a restaurant</h1>
                            <p class="lead">Choose your restaurant to find reviews of.</p>


                            <form onSubmit={handleSubmit} target="_self" id="searchForm" data-sb-form-api-token="API_TOKEN">
                                <div class="form-group mb-3">
                                    <input class="form-control mb-3" placeholder="Restaurant" type="text" id="restaurant" data-sb-validations="required" required onChange={(e) => { setRestaurantName(e.target.value) }} />
                                    <div class="invalid-feedback" data-sb-feedback="city:required">A restaurant is required.</div>
                                </div>
                                <div class="d-grid"><button class="btn btn-primary btn-xl" id="submitButton" type="submit" onClick={searchByRestaurant}>Find reviews</button></div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>

            <div>
                {restaurantReviews.map((val) => {
                    return (
                        <div class="container py-3 px-lg-5 ">
                            <div class="row justify-content-md-center">
                                <div class="col-md-5">
                                    <div class="jumbotron text-center align-items-center text-white ">
                                        <h1 class="display-4">{val.restaurant_rating}/5</h1>
                                        <blockquote class="blockquote text-center">
                                            <p class="mb-3">{val.restaurant_review}</p>
                                            <footer class="blockquote-footer"><cite title="Source Title">{val.restaurant_city}</cite></footer>
                                        </blockquote>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>

    );
}