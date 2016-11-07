var express = require('express');

var app = express();

app.get('/', function(request, response) {
    response.send("Hello World");
});

app.listen(process.env.PORT || 8080, function(){
	console.log('Server is running at http://localhost:8080');
});