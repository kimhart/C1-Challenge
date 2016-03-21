var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    request = require('request'),
    date = new Date(),
    timeStamp = date.toISOString();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// this is only handling the first 'NaN', then breaks
app.post('/measurements', function(req, res){
  var data = req.body;
  for(var metric in data) {
    if (metric !== 'timestamp' && isNaN(data[metric])) {
      console.log('Invalid: ' + metric + ' is not a number.')
      res.sendStatus(400);
    }
  } res.end();
});

var server = app.listen(3000, function(){
  request ({
        method: 'POST',
        uri: 'http://localhost:3000/measurements',
        json: true,
        body: {
            timestamp: timeStamp,
            temperature: 'not',
            dewPoint:  9,
            precipitation: 0
        }},
    function(err, httpResponse, body) {
      console.log('Scenario 2 — Cannot Add Measurement w/ Invalid Values')
      console.log('Status Code: ', httpResponse.statusCode);
      console.log('-------------------------------------------------')
      server.close();
    }
  );
});