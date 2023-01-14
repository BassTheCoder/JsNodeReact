const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express();
const mysql = require('mysql');


app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

const connection = mysql.createConnection({
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: '',
    dbname: 'food_io'
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected to database!");
});

app.get('/api/reviews/all', (req, res) => {

    const selectQuery = "SELECT * FROM food_io.restaurant_reviews"
    connection.query(selectQuery, function (err, result) {
        res.send(result)
    })
})

app.get('/api/reviews/restaurant/all', (req, res) => {

    const restaurant = req.headers.restaurant
    console.log('Getting reviews for ' + restaurant)

    const selectQuery = "SELECT * FROM food_io.restaurant_reviews where restaurant_name = ? ORDER BY id DESC"
    connection.query(selectQuery, [restaurant], function (err, result) {
        res.send(result)
    })
})

app.get('/api/reviews/highlight', (req, res) => {

    const selectQuery = "SELECT * FROM food_io.restaurant_reviews WHERE restaurant_rating = '5' ORDER BY id DESC LIMIT 1;"
    connection.query(selectQuery, function (err, result) {
        res.send(result)
    })
})

app.get('/api/reviews/city', (req, res) => {

    const city = req.headers.city
    console.log('Getting restaurants in ' + city)

    const selectQuery = "SELECT restaurant_name, ROUND(avg(restaurant_rating), 1) as 'average_rating', count(*) as 'review_count' FROM food_io.restaurant_reviews WHERE restaurant_city = ? GROUP BY restaurant_name ORDER BY avg(restaurant_rating) DESC;"
    connection.query(selectQuery, [city], function (err, result) {
        res.send(result)
    })
})

app.post('/api/submitReview', (req, res) => {

    const restaurantName = req.body.restaurantName
    const restaurantCity = req.body.restaurantCity
    const restaurantRating = req.body.restaurantRating
    const restaurantReview = req.body.restaurantReview

    const insertQuery = "INSERT INTO food_io.restaurant_reviews (restaurant_name, restaurant_city, restaurant_rating, restaurant_review) VALUES (?,?,?,?);"
    connection.query(insertQuery, [restaurantName, restaurantCity, restaurantRating, restaurantReview], function (err, result) {
        console.log(result)
        res.send(result)
    })
});

app.post('/api/reviews/delete', (req, res) => {

    const id = req.headers.id
    console.log(id)
    const deleteQuery = "DELETE FROM food_io.restaurant_reviews WHERE id = ?"
    connection.query(deleteQuery, [id], function (err, result) {
        console.log(result)
        res.send(result)
    })
})

app.listen(5000, () => {
    console.log("server started on port 5000.");
});