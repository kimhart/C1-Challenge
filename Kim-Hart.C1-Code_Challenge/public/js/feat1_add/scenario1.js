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
    res.location('/measurements/' + req.body.timestamp);
    res.sendStatus(201);
});


var server = app.listen(3000, function(){
    request ({
          method: 'POST',
          uri: 'http://localhost:3000/measurements',
          json: true,
          body: {
              timestamp: timeStamp,
              temperature: 27.1,
              dewPoint: 16.7,
              precipitation: 0
          }},
      function(err, httpResponse, body) {
        console.log('Scenario 1 — Add a Measurement')
        console.log('Status Code: ', httpResponse.statusCode);
        console.log('Location: ', httpResponse.headers.location);
        console.log('-------------------------------------------------')
        server.close();
      }
    );
});