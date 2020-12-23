//var http = require('http');

//var util = require('util');
//var cluster = require('cluster');
//var nbCPUs = require('os').cpus().length;
//var count = 0;
//const fs = require('fs');


  var port = 80;
  var express = require('express');
  var app = express();
  var rootFolder = '/nodejs/proxmity/';
  var clientFolder = rootFolder+'build/client/';

  app.get('/', function(req, res) {
    res.sendFile(clientFolder+'main.html');
  });
  app.get('/main.js', function(req, res) {
    res.sendFile(clientFolder+'main.js');
  });
  app.use(express.static(__dirname + '/public'));

  app.get('/temp', function(req, res) {
    var spawn = require('child_process').spawnSync;
    var catTemp = spawn('cat',['/sys/class/thermal/thermal_zone0/temp']);
    var time = new Date();

    res.setHeader('Content-Type', 'text/plain');
    res.end('Current CPU Temp '+(catTemp.stdout.toString()/1000).toFixed(2)+'C\n');
  });
  app.listen(port);


  console.log(`Server running on port `+port);
