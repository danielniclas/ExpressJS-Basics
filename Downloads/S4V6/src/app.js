'use strict';

var express = require('express'),
	  posts = require('./mock/posts.json');

var app = express();


//  Settings  app.set()
app.set('view engine', 'jade');					// set 'view engine' PARAMETER
app.set('views', __dirname + '/templates');		//  Views PARAMETER.  Takes folder path to look for template
												//  __dirname  make sure template path is relative to the file


// Routes  app.get(0
app.get('/', function(req, res){
	res.render('index');				//  res.render()  <<  Look for JADE FILE
});

app.get('/blog/:title?', function(req, res){ 
	var title = req.params.title;
	if (title === undefined) {
		res.status(503);
		res.send("This page is under construction!");
	} else {
		var post = posts[title] || {};
		res.render('post', { post: post});
	}
});

app.listen(3000, function() {
	console.log("The frontend server is running on port 3000!");
});
