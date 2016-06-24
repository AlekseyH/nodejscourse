var reader = require('fs');

var fileData = reader.readFileSync(__dirname + '/greetFile.txt','utf8');
console.log(fileData);

var asyncReader = reader.readFile('../anotherText.txt', 'utf8',function(err,data){
	
	if(err){
		console.log(err.toString())
	}
	console.log(data);
});

console.log('Another code working');
