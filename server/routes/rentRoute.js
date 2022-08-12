const router = require('express').Router();
const dressController = require('../controllers/dressController');
const rentController = require('../controllers/rentController')

// Rent all dresses
router.route('/').get(dressController.index);

// Rent a single dress
router.route('/:id').get(rentController.rentDress);

module.exports = router;