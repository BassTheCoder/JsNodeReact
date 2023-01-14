import React from 'react';
import { useLocation } from 'react-router-dom';

export default function NoMatch() {
    let location = useLocation();
    return (
        <div class="container py-5 px-lg-5">
          <div class="row justify-content-md-center">
            <div class="col-md-12">
              <div class="jumbotron text-center align-items-center text-white ">
                <h1 class="display-1">Cannot find location for</h1>
                <h1 class="display-1"><code>{location.pathname}</code></h1>
              </div>
            </div>
          </div>
        </div>
    );
}