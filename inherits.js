var util = require('util');


function Person(){
	this.firstName = 'Aleksey',
	this.lastName = 'Haytman'
}

Person.prototype.greet = function(){
	console.log('Hello ' + this.lastName + ' ' + this.firstName);
}


var person = new Person();

person.greet();

function Policeman(){
	Person.call(this);
	privateNumber = '123456'
}

util.inherits(Policeman, Person);

var policeman = new Policeman();
policeman.greet();
