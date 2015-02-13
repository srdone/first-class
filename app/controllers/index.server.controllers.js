exports.render = function (req, res) {
  if (req.session.lastVisit) {
    console.log(req.session.lastVisit);
  }

  req.session.lastVisit = Date.now();

  res.render('index', {
    title: 'Hello World'
  });
};