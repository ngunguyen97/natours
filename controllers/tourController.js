/* eslint-disable no-shadow */
/* eslint-disable radix */

const Tour = require('../models/tourModel');

exports.getAllTours = (req, res) => {
  // res.status(200).json({
  //   status: 'success',
  //   requestedAt: req.requestTime,
  //   results: tours.length,
  //   data: { tours }
  // });
};

exports.getTour = (req, res) => {
  // const id = parseInt(req.params.id);
  // const tour = tours.find(tour => tour.id === id);
  // res.status(200).json({
  //   status: 'success',
  //   results: [tour].length,
  //   data: { tour }
  // });
};

exports.createTour = async (req, res) => {
  try {
    const newTour = await Tour.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        tour: newTour
      }
    });
  } catch (error) {
    res.status(201).json({
      status: 'fail',
      data: {
        tour: error
      }
    });
  }
};

exports.updateTour = (req, res) => {
  const updatedTour = Object.assign({}, req.body);

  res.status(200).json({
    status: 'success',
    data: {
      tour: updatedTour
    }
  });
};

exports.deleteTour = (req, res) => {
  res.status(204).json({
    status: 'success',
    data: {
      tour: null
    }
  });
};
