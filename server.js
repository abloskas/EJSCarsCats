// Load the express module and store it in the variable express (Where do you think this comes from?)
var express = require("express");
console.log("Let's find out what express is", express);
// invoke express and store the result in the variable app
var app = express();
console.log("Let's find out what app is", app);
// use app's get method and pass it the base route '/' and a callback
app.get('/', function(request, response) {
    // just for fun, take a look at the request and response objects
   console.log("The request object", request);
   console.log("The response object", response);
   // use the response object's .send() method to respond with an h1
   response.send("<h1>Hello Express</h1>");
})

// this is the line that tells our server to use the "/static" folder for static content
app.use(express.static(__dirname + "/static"));
// two underscores before dirname
// try printing out __dirname using console.log to see what it is and why we use it
// This sets the location where express will look for the ejs views
app.set('views', __dirname + '/views'); 
// Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
app.set('view engine', 'ejs');
app.get("/cars", function(req, res){
	res.render("cars");
})
app.get("/cats", function(req, res){
	res.render("cats");
})
app.get("/cars/new", function(req, res){
	res.render("new");
})



app.get("style.css", function(req, res){
	console.log("Do we get into this route?");
	res.render("/static/style.css");
})

PORT = 8000;
app.listen(8000, function(){
	console.log("Listening on port " + PORT);
})
