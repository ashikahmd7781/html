const express = require('express');
const router = express.Router();
const movieController = require('../controller/movieController');

router.post('/submit',movieController.createMovie);
router.get('/getData',movieController.getMovieData);

module.exports = router;