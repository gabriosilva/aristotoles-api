const router = require('express').Router();

//Controller
const thoughtController = require('../controllers/thought');

//Routes
router.get('/random', thoughtController.random);
router.post('/add', thoughtController.addThought);

module.exports = router; 