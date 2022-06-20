const express = require('express');
const tourController = require('./../controllers/tourController');

const router = express.Router();

//router.param('id', tourController.checkID);

// Create a checkBody middleware
// Check if body contains the name and price properties.
// If not, send back 400 (bad request)
// Add it to the post hanlder stack.

router.route('/statistics').get(tourController.getToursStatistics);
router.route('/monthly-plan/:year').get(tourController.getMonthlyPlan);

router.get('/', tourController.getAllTours);
router.get('/:id', tourController.getTour);
router.post('/', tourController.createTour);
router.patch('/:id', tourController.updateTour);
router.delete('/:id', tourController.deleteTour);

module.exports = router;
