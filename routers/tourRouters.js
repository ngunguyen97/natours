const express = require('express');
const tourController = require('./../controllers/tourController');
const authController = require('./../controllers/authController');
const reviewRouter = require('./../routers/reviewRouters');

const router = express.Router();

/* POST /tour/234fa4d/review */
/* GET /tour/234fa4d/review */
/* GET /tour/234fa4d/reivew/94887fda */

router.use('/:tourId/reviews', reviewRouter);

// router
//   .route('/:tourId/review')
//   .post(
//     authController.protect,
//     authController.restrictTo('user'),
//     reviewController.createReview
//   );

//router.param('id', tourController.checkID);

// Create a checkBody middleware
// Check if body contains the name and price properties.
// If not, send back 400 (bad request)
// Add it to the post hanlder stack.

router.route('/statistics').get(tourController.getToursStatistics);
router
  .route('/monthly-plan/:year')
  .get(
    authController.protect,
    authController.restrictTo('admin', 'lead-guide'),
    tourController.getMonthlyPlan
  );

router.get('/', tourController.getAllTours);
router.get('/:id', tourController.getTour);
router.post(
  '/',
  authController.protect,
  authController.restrictTo('admin'),
  tourController.createTour
);
router.patch(
  '/:id',
  authController.protect,
  authController.restrictTo('admin', 'lead-guide'),
  tourController.updateTour
);
router.delete(
  '/:id',
  authController.protect,
  authController.restrictTo('admin', 'lead-guide'),
  tourController.deleteTour
);

module.exports = router;
