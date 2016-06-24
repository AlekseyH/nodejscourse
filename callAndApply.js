var obj = {
	name : 'Aleksey',
	greeting : function(param) {
		// body...
		console.log(this.name);
		console.log(param);
	}
}

obj.greeting();

obj.greeting.call({name : 'Alena'},'Zoya');
