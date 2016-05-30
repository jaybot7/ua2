var express = require('express');
var app = express();
var crypto = require('crypto');

app.put('/message/:NAME', function(req, res){
    var currName = req.params.NAME;
   // console.log(currName);
    var hashy = crypto.createHash("sha1");
    var datey = hashy.update(new Date().toDateString() + currName);
    var digesty = hashy.digest("hex");
    res.send(digesty);
        
    });


app.listen(process.argv[2]);