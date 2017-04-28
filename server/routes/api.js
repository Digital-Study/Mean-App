const express = require('express');
const router = express.Router();

// declare axios for making http requests
const axios = require('axios');
const API = 'https://jsonplaceholder.typicode.com';


var mongo = require("mongojs");
//var db= mongojs('mongodb://jagadishvaranasi:asdfghjkl@ds123381.mlab.com:23381/myfirstmdbjagdish',['tasks']);


var Server = mongo.Server;
var Db = mongo.Db;
var server = new Server('ds123381.mlab.com', 23381, {auto_reconnect : true});
var db = new Db('myfirstmdbjagdish', server);
db.open(function(err, client) {
    client.authenticate('jagadishvaranasi', 'asdfghjkl', function(err, success) {
    console.log("connected");
    });
});



/* GET api listing. */
router.get('/', (req, res) => {
  res.send('service working !!');
});



router.get('/tasks', function (req, res,next) {


db.tasks.find(function(err,tasks){

if(err)
{

res.send(err);

}
res.json(tasks);


})

});


router.get('/dummy', (req, res) => {


  res.send('dummy service working !!!!');
});


 // Get all posts
router.get('/posts', (req, res) => {
  // Get posts from the mock api
  // This should ideally be replaced with a service that connects to MongoDB
  axios.get(`${API}/posts`, { proxy: { host: 'https://proxy.cognizant.com', port: 6050}})
    .then(posts => {
      res.status(200).json(posts);
    })
    .catch(error => {
      res.status(500).send(error)
    });
});


module.exports = router;