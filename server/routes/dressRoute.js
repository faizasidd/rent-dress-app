const router = require('express').Router();
const dressController = require('../controllers/dressController');

// Get all dresses
router.route('/').get(dressController.index);

// Get a single dress
router.route('/:id').get(dressController.singleDress);

// Get dress from a particular category
router.route('/category/:id').get(dressController.dressCategory);

// Create/Post a new dress
router.route('/').post(dressController.addDress);

// Update an existing dress using PUT
router.route('/:id').put(dressController.updateDress);

// Delete an existing dress using DELETE
router.route('/:id').delete(dressController.deleteDress);

module.exports = router;