'use strict';

var express = require('express'),
	  posts = require('./mock/posts.json');

var app = express();


// View Engine:
app.set('view engine', 'jade');
app.set('views', __dirname + '/templates');


// Routes:
app.get('/', function(req, res){
	res.render('index');				//  << RESPONSE is a TEMPLATE
});


//  Request and Receive data based on the parameters in the URL:
//  Users can request different data from your application simply by typing in a different URL  << MAGIC of ROUTES
app.get('/blog/:title?', function(req, res){ 		//  Add parameter to route:  /:title?  Characters after the slash turn into the title parameter
													//  URL:  http://localhost:3000/blog/run
													//  URL:  http://localhost:3000/blog/crossfit
													//  URL:  http://localhost:3000/blog/swimming

	var title = req.params.title;					//  REQUEST OBJECT:  title is the parameter added to the request object
	console.log("req.params.title: " + title);

	if (title === undefined) {
		res.status(503);
		res.send("Status 503:  This page is under construction!");
	} else {
		var post = posts[title];					//  posts is the JSON Object.  posts[title] is the object in the posts object
		res.send(post);								//  post is the variable we send to the browser >>  post OBJECT
	}
});



app.listen(3000, function() {
	console.log("The frontend server is running on port 3000!");
});
