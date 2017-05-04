const express = require('express');
var bodyParser = require("body-parser");
var mongojs = require('mongojs');
// declare axios for making http requests
const axios = require('axios');
var db = mongojs('mongodb://localhost/mean-demo');
var router = express.Router();
const API = 'https://jsonplaceholder.typicode.com';

var db = mongojs('mongodb://localhost/mean-demo');


/* GET All employees */
router.get('/tasks', function(req, res, next) {
    db.tasks.find(function(err, tasks) {
        if (err) {
            res.send(err);
        } else {
            res.json(tasks);
        }
    });
});

router.get('/', (req, res) => {
  res.send(' Express Js service is working !!');
});

module.exports = router;