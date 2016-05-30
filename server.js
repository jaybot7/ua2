// Require what we need
var http = require("http");
var express = require("express");
var app = express();
var useragent = require('express-useragent');
var requestLanguage = require('express-request-language');
var cookieParser = require('cookie-parser');

// Set the view directory to /views
app.set("views", __dirname + "/views");

// Let's use the Jade templating language
app.set("view engine", "jade");

app.use(express.static(__dirname + "/public"));
app.use(useragent.express());
app.use(cookieParser());
app.use(requestLanguage({
  languages: ['en-US', 'zh-CN'],
  cookie: {
    name: 'language',
    options: { maxAge: 24*3600*1000 },
    url: '/languages/{language}'
  }
}));

// Add some middleware
app.all("*", function(request, response, next) {
  var ipaddress = request.ip;
  var ua = request.useragent;
  var lang = request.language;
  var mapper = {"ipaddress":"",
							"language":"",
							"software":""
							}
    mapper.ipaddress = ipaddress;
    mapper.software = ua.os;
    mapper["language"] = lang;
    
  var temp = JSON.stringify(mapper,0,1);
  
  response.render("index", { message: temp });
  next();
});


// Start it up!
http.createServer(app).listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0");

var addr = process.env.IP;
console.log("Server running at ", addr + ":" + process.env.PORT );

