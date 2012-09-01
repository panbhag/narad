var express = require('express'),
app = express(),
http = require('http'),
server = http.createServer(app);



app.use(express.bodyParser());


app.get('/', function(req, res){
  res.sendfile(__dirname + '/public/index.html');  
  
});



app.post('/publish/:channel/:event/', function(req, res){
  console.log("**************************************");
  var params = req.params;
  console.log(req.params);
  console.log(req.body);
  var data = req.body;
  console.log("**************************************");
  var result = io.sockets.emit(params.channel,{event:params.event,data:data});
  //console.log(result);
  console.log("**************************************"); 
  res.sendfile(__dirname + '/public/index.html');  

  
});

//include static files
app.use(express.static(__dirname + '/public'));


server = server.listen(3000);

var io = require('socket.io').listen(server);

//var sio = io.connect();
//var socket = sio.socket();


io.sockets.on('connection', function (s) {
 socket = s
 socket.emit('c1', { hello: 'world' });

 socket.on('test', function (data) {
    socket.emit('c1', { hello: 'world' });
    console.log('test');console.log(data);
  });
 
 
 });
