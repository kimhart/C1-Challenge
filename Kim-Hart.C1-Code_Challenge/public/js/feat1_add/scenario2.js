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
  var data = req.body;
  for(var metric in data) {
    if (metric !== 'timestamp' && isNaN(data[metric])) {
      
      res.status(400).send('Invalid input: ' + metric + ' is not a number.');
        console.log('NOT a number')
    } else {
        console.log('IS a number')
        res.sendStatus(201);
    };
  };
});


var server = app.listen(3000, function(){
  request ({
        method: 'POST',
        uri: 'http://localhost:3000/measurements',
        json: true,
        body: {
            timestamp: timeStamp,
            temperature: 8,
            dewPoint: 16.7,
            precipitation: 0
        }},
    function(err, httpResponse, body) {
      console.log('Scenario 2 — Cannot Add Measurement w/ Invalid Values')
      console.log('Status Code: ', httpResponse.statusCode);
      // console.log(httpResponse)
      console.log('-------------------------------------------------')
      server.close();
    }
  );
});