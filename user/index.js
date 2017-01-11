// module.exports = exports = this

var phrases = require("./ru");

function User(name) {
  this.name = name;
}

User.prototype.hello = function(who) {
  console.log(phrases.Hello + ", ", who.name);
}

console.log("user is required");

module.exports = User;

// console.log(module);
