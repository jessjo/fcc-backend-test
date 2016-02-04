'use strict';

var express = require('express');
//var routes = require('./app/routes/index.js');


var app = express();
require('dotenv').load();

//routes(app);

app.get('/:query', function (req, res) {
    console.log(req.params.query + "this works")
    res.send("TEST");
    
})


var port = process.env.PORT || 8080;
app.listen(port,  function () {
	console.log('Node.js listening on port ' + port + '...');
});