/*var omdb = require('omdb');

omdb.get({ title: 'Inception' }, {'tomatoes': true}, function(err, movie) {
    if(err) {
        return console.error(err);
    }

    if(!movie) {
        return console.log('Movie not found!');
    }

    console.log(movie.title, movie.year, movie.imdb.rating, movie.runtime, movie.director, movie.actors, movie.metacritic, movie.awards, movie.genres, movie.tomato.meter);
    console.log(movie.plot);
}); */

var express = require('express')
var bodyParser = require('body-parser')
var request = require('request')
var app = express()

app.set('port', (process.env.PORT || 5000))

// Process application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))

// Process application/json
app.use(bodyParser.json())

// Index route
app.get('/', function (req, res) {
    res.send('Hello world, I am a chat bot')
})

// for Facebook verification
app.get('/webhook/', function (req, res) {
    if (req.query['hub.verify_token'] === 'your_wish_is_my_command') {
        res.send(req.query['hub.challenge'])
    }
    res.send('Error, wrong token')
})

// Spin up the server
app.listen(app.get('port'), function() {
    console.log('running on port', app.get('port'))
})