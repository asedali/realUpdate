var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});
app.get('/red', function(req, res){
  res.sendFile(__dirname + '/index.html');
});
io.on('connection', function(socket){
  socket.on('dataUpdater', function(msg){
    io.emit('dataUpdater', msg);
  });
});
app.set('port', (process.env.PORT || 5000));
http.listen(port, function(){
  console.log('listening on *:5000');
});
