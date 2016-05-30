var express = require('express');
var app = express();

app.set('views', process.argv[3]); //set path
app.set('view engine', "jade") //use jade

app.get('/home', function(request, response) {
    response.render('index', { //render using view engine in app.set
        date: new Date().toDateString() //render this value to...
    });
})

app.listen(process.argv[2]);