var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    request = require('request'),
    date = new Date(),
    timeStamp = date.toISOString();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: temperature
}));


app.post('/measurements', function(req,res){
  // var newMetric = new Metric(req.body.temperature, req.body.dewPoint, req.body.precipitation);
  //   res.json(newMetric);
  //   console.log(newMetric);
    res.location('/measurements/' + req.body.timestamp);
    res.sendStatus(201);
});

app.get('/measurements/:timestamp', function(req,res){
   //TBD
});

app.get('/measurements/:date', function(req,res){
   //TBD
});

app.put('/measurements/:timestamp', function(req,res){
   //TBD
});

app.patch('/measurements/:timestamp', function(req,res){
   //TBD
});

app.delete('/measurements/:timestamp', function(req,res){
   //TBD
});

app.get('/stats', function(req, res){
  //TBD
})


app.listen(3000, function(){
  console.log("listening on 3000");
});




