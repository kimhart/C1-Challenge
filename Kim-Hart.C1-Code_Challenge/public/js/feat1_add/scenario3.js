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

app.post('/measurements', function(req, res){
    if (!req.body.timestamp) {
      res.sendStatus(400);
    } else {
      res.sendStatus(201);
  }
});

var server = app.listen(3000, function(){
  request ({
        method: 'POST',
        uri: 'http://localhost:3000/measurements',
        json: true,
        body: {
            temperature: 'not a number',
            dewPoint:  9,
            precipitation: 0
        }},
    function(err, httpResponse, body) {
      console.log('Scenario 3 — Cannot Add Measurement Without Timestamp')
      console.log('Status Code: ', httpResponse.statusCode);
      console.log('-------------------------------------------------')
      server.close();
    }
  );
});