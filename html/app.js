var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/blocks', function(request,response){
	var blocks = ['fixed','movable','rotating'];
	response.json(blocks);

	//response.redirect(301,'/parts'); // redirect old route to new path
});

app.listen(3000, function(){
	console.log('listening to port 3000');
});