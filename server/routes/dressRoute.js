const router = require('express').Router();
const dressController = require('../controllers/dressController');

// Get all dresses
router.route('/').get(dressController.index);

// Get a single dress
router.route('/:id').get(dressController.singleDress);

// Get dress from a particular category
router.route('/:id/category').get(dressController.dressCategory);

// Create/Post a new dress
router.route('/').post(dressController.addDress);


module.exports = router;