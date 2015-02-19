var User = require('mongoose').model('User');

module.exports = function(app) {

  //app.route('/users')
  //  .post(function (req, res, next) {
  //    var user = new User(req.body);
  //
  //    user.save(function (err) {
  //      if (err) {
  //        next(err);
  //      } else {
  //        res.json(user);
  //      }
  //    });
  //  })
  //  .get(function (req, res, next) {
  //    User.find({}).exec(function (err, users) {
  //      if (err) {
  //        next(err);
  //      } else {
  //        res.json(users);
  //      }
  //    });
  //  })
  //  .delete(function (req, res, next) {
  //    User.findOneAndRemove({username: req.body.username}).exec(function (err, user) {
  //      if (err) {
  //        next(err);
  //      } else if (!user) {
  //        res.send({
  //          message: 'user does not exist'
  //        });
  //      } else {
  //        res.send({
  //          message: 'user ' + user.username + ' successfully removed.'
  //        });
  //      }
  //    });
  //  })
  //  .put(function (req, res, next) {
  //    User.findByIdAndUpdate(req.body._id, req.body).exec(function (err, user) {
  //      if (err) {
  //        next(err);
  //      } else {
  //        res.json(user);
  //      }
  //    });
  //  });

};