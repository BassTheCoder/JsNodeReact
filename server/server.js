const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express();
const mysql = require('mysql');

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

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/api/submitReview', (req, res) => {

    const restaurantName = req.body.restaurantName
    const restaurantRating = req.body.restaurantRating
    const restaurantReview = req.body.restaurantReview

    const insertQuery = "INSERT INTO food_io.restaurant_reviews (restaurant_name, restaurant_rating, restaurant_review) VALUES (?,?,?);"
    connection.query(insertQuery, [restaurantName, restaurantRating, restaurantReview], function (err, result) {
        console.log(result)
    })
});



app.listen(5000, () => {
    console.log("server started on port 5000.");
});