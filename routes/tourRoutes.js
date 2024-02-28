const express = require('express');
const tourController = require('./../controllers/tourController');

const router = express.Router();

//comes from middleware
// router.param('id', tourController.checkID);

router
  .route('/')
  .get(tourController.getAllTours)
  // tourController.checkBody,
  .post(tourController.createTour);
router
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

module.exports = router;
