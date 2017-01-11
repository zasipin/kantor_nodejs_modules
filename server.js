var User = require('./user');

function run(){
var vasya = new User('Vasya');
var petya = new User('Петя');

vasya.hello(petya);
}

if(module.parent) {
  exports.run = run;
} else {
  run();
}
