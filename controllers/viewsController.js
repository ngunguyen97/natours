exports.getOverview = (req, res) => {
  res.status(200).render('overview', {
    title: 'The overview page'
  });
};

exports.getTour = (req, res) => {
  res.status(200).render('tour', {
    title: 'The Forest Hiker Tour'
  });
};
