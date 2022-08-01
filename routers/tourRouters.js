const express = require('express');
const tourController = require('./../controllers/tourController');
const authController = require('./../controllers/authController');
const reviewController = require('./../controllers/reviewController');

const router = express.Router();

//router.param('id', tourController.checkID);

// Create a checkBody middleware
// Check if body contains the name and price properties.
// If not, send back 400 (bad request)
// Add it to the post hanlder stack.

router.route('/statistics').get(tourController.getToursStatistics);
router.route('/monthly-plan/:year').get(tourController.getMonthlyPlan);

router.get('/', authController.protect, tourController.getAllTours);
router.get('/:id', tourController.getTour);
router.post('/', tourController.createTour);
router.patch('/:id', tourController.updateTour);
router.delete(
  '/:id',
  authController.protect,
  authController.restrictTo('admin', 'lead-guide'),
  tourController.deleteTour
);

/* POST /tour/234fa4d/review */
/* GET /tour/234fa4d/review */
/* GET /tour/234fa4d/reivew/94887fda */

router
  .route('/:tourId/review')
  .post(
    authController.protect,
    authController.restrictTo('user'),
    reviewController.createReview
  );

module.exports = router;
