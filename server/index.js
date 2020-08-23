const http = require('http');
const socketIo = require('socket.io');

const server = require('./server')

const port = process.env.PORT || 3000

const io = socketIo.listen(http.createServer(server));
io.listen(port+1);
//Connection Event
io.on("connection", function(socket){
    //connected to socket
    console.log("user Connected");

    //On new state broadcast
    socket.on("new state", function(data){
        console.log("New State - index.js - line 17");
        console.log(data);
        io.sockets.emit("new state", data);
    });

    //Disconnect
    socket.on("disconnect", function(){
        console.log("User disconnected");
    });
});


server.listen(port, function () {
  // eslint-disable-next-line no-console
  console.log('Listening on port', port)
})
