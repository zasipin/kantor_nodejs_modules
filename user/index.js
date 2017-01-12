// module.exports = exports = this

var db = require("db");
// db.connect();

var log = require('logger')(module);

function User(name) {
  this.name = name;
}

User.prototype.hello = function(who) {
  // console.log(db.getPhrase("Hello") + ", ", who.name);
  log(db.getPhrase("Hello") + ", ", who.name);
}

console.log("user is required");

module.exports = User;

// console.log(module);
