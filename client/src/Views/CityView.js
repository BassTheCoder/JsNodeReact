import React, { useState } from 'react';
import axios from 'axios';

export default function CityView() {

    const [city, setCity] = useState('nocity');
    const [restaurants, setRestaurants] = useState([]);

    const searchByCity = () => {
        axios.get('http://localhost:5000/api/reviews/city', {
            headers: {
                city: `${city}`
            }
        }).then((response) => {
            setRestaurants(response.data);
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
                            <h1 class="display-4">Find restaurants in a city</h1>
                            <p class="lead">Choose a city.</p>


                            <form onSubmit={handleSubmit} target="_self" id="searchForm" data-sb-form-api-token="API_TOKEN">
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

            <div>
                {restaurants.map((val) => {
                    return (
                        <div class="container py-3 px-lg-5 ">
                            <div class="row justify-content-md-center">
                                <div class="col-md-5">
                                    <div class="jumbotron text-center align-items-center text-white ">
                                        <h1 class="display-4">{val.restaurant_name}</h1>
                                        <h2 class="display-6">{val.average_rating}/5</h2>
                                        <blockquote class="blockquote text-center">
                                            <footer class="text-muted"><cite title="Source Title">({val.review_count} reviews)</cite></footer>
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