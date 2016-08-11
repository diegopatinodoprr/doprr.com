var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/',function(req,res)
{
  res.send('sockect.io dev perso')
})
io.on('connection', function (socket) {
  socket.on('logger', function (msg) {
    var logMessage = new Date().toUTCString() + " # : " + msg
    io.emit('logger', logMessage);
  });

  socket.on('clear', function (msg) {

    io.emit('clear', "");

  });



});
http.listen(3000, function () {
  console.log('listening on *:3000');
});