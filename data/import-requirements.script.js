var exec = require('child_process').exec;

module.exports = function () {
  // see http://www.dzone.com/snippets/execute-unix-command-nodejs
  function puts(err, sterr, stdout) {
    console.log(stdout);
  }

  //drop old data
  exec("mongo first-class-dev --eval \"db.requirements.drop()\"", puts);

  //import data
  exec("mongoimport -d first-class-dev -c requirements --type csv --file data/requirements.csv --headerline", puts);
}