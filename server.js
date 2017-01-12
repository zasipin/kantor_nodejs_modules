var User = require('./user');
var log = require('logger')(module);
var db = require("db");
db.connect();

function run(){
var vasya = new User('Vasya');
var petya = new User('Петя');

vasya.hello(petya);

// console.log(db.getPhrase("Run successful"));
log(db.getPhrase("Run successful"));

}

if(module.parent) {
  exports.run = run;
} else {
  run();
}
