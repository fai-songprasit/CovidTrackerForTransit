const path = require('path');
const express = require('express');


const app = express();

const busRoute = require('./routes/busById');

app.use(express.json());
app.use(express.static(path.join(__dirname, './public')));

app.use('/api/v1/', busRoute);

const server = require('http').createServer(app);
const io = require('socket.io').listen(server);

//Connection Event
io.on("connection", function(socket){
    //connected to socket
    console.log("user Connected");

    //On new state broadcast
    socket.on("new state", function(data){
        // console.log("New State - server.js - line 24");
        // console.log(data);
        io.sockets.emit("new state", data);
    });

    //Disconnect
    socket.on("disconnect", function(){
        console.log("User disconnected");
    });
});


module.exports = server;