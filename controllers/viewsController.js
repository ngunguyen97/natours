const Tour = require('./../models/tourModel');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');

exports.getOverview = catchAsync(async (req, res) => {
  const tours = await Tour.find();
  res.status(200).render('overview', {
    title: 'All tours',
    tours
  });
});

exports.getTour = catchAsync(async (req, res, next) => {
  const tour = await Tour.findOne({ slug: req.params.slug }).populate({
    path: 'reviews',
    fields: 'review rating user'
  });

  if (!tour) {
    return next(new AppError('There is no tour with that name', 404));
  }

  //console.log(tour);

  res.status(200).render('tour', {
    title: tour.name,
    tour
  });
});

exports.getLoginForm = (req, res) => {
  if (res.locals.user) {
    res.redirect('/');
  }

  res.status(200).render('login', {
    title: 'Log into your account'
  });
};

exports.getSignupForm = (req, res) => {
  if (res.locals.user) {
    res.redirect('/');
  }

  res.status(200).render('signup', {
    title: 'Create your account'
  });
};

exports.getAccount = (req, res) => {
  res.status(200).render('account', {
    title: 'My Account'
  });
};
