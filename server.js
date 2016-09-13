
//var IP_ADDRESS = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";
var PORT = ( process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT ) || 3500;

var express = require("express");
var app = express();


app.use('/', function(req, res){

	console.log("Received request");
	res.send("Hello World!");
});

//app.listen(PORT, IP_ADDRESS, function() {
app.listen(PORT, function() {				
	console.log("Server started on port: " +  PORT);
//	console.log("Server started on port: " + IP_ADDRESS + ":" +  PORT);				
});
