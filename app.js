var Emetter = require('./emitter');
var eventConfig = require('./configEvents').events;

var emtr = new Emetter();

emtr.on(eventConfig.GREET, function() {
	// body...
	console.log('Hello greet emetter');
});

emtr.on(eventConfig.GREET,function() {
	// body...
	console.log('Another event happens');
});

emtr.emit(eventConfig.GREET);