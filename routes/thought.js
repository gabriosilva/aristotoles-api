const router = require('express').Router();

//Controller
const thoughtController = require('../controllers/thought');

//Routes
router.get('/random', thoughtController.random);

module.exports = router;