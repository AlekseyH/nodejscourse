
function greet (callback){
	console.log('Hello !');

	var user = {
		name : 'Aleksey'
	};

	callback(user);	
}


greet(function(user){

	console.log('callback invoked');
	console.log(user.name);
});


