// middleware to use on routes to secure them - I got an example of this code from the web
exports.requireAuthentication = function (req, res, next) {
  if (!req.isAuthenticated()) {
    res.status(401).send({
      message: 'User not authenticated'
    });
  } else {
    next();
  }
};