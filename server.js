//library we're gonna use --> express
//Install express lib to package.json
var express = require('express');

//get an express object
var app = express();

//Without this part, get a weird err: cannot Get/: cuz the url is not defined
//Whenever get a url '/', do the function
//req: you're resquesting something
//res: server responses with something
app.get('/name',function(req, res){
	//response with some data
	var name = "Yiyi";
	res.json("My name is " + name);
});

//sending some data to the server
app.post();

//update a specific set of data
app.put();

//delete data
app.delete();

//run the server
app.listen(8000, function(err){
	if(err) throw err;
	console.log("Server runs on port 8000");
});