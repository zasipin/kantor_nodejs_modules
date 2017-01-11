var user = require('./user');

var vasya = new user.User('Vasya');
var petya = new user.User('Петя');

vasya.hello(petya);
