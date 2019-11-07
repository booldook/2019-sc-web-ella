function getData() {
	ajax("/rest-ajax", "get", {}, function(res){
		console.log(res);
	});
}
getData();