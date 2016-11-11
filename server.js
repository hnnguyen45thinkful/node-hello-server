//Created and modified by Hieu Nguyen
var express = require('express');

var app = express();
//Example from the node curriculum "Hello World"
app.get('/', function(request, response) {
    response.send("Hello World");
});

//Example from node curriculum.
app.get('/:firstname/:lastname', function(request, response) {
    var first = request.params.firstname;
    var last = request.params.lastname;
    response.send(["Hello", first, last].join(" "));
});

//Try it exercise jedi name Unit 2 Lesson 1-1
app.get('/jedi/:firstname/:lastname', function(request, response) {
    var first = request.params.firstname;
    var last = request.params.lastname;
    //array.slice(start,end) using for the last and first names to cut up from the beginning to the end.
    //http://www.w3schools.com/jsref/jsref_slice_array.asp
    var jediName = last.slice(0,3) + first.slice(0,2);
    response.send(["Hello", jediName].join(" "));
});

app.listen(process.env.PORT || 8080, function(){
    console.log('Server is running at http://localhost:8080');
});

exports.app = app;

//Type in node server.js and let it run on gitbash and then type the address http://localhost:8080 on google chrome.
//test out the website http://localhost:8080/hieu/nguyen/ gives me "Hello World hieu nguyen."
//test out the website http://localhost:8080/jedi/hieu/nguyen/ gives me "Hello nguhi."