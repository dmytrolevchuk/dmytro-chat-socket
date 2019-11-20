const path = require('path');
const express = require('express');
const app = express();

const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(express.static(path.join(__dirname, 'client')));

app.get('/api', function(req, res){

    console.log("hello api")
    // res.send('<h1>Hello world</h1>');
});

io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('chat message', function(msg){
        console.log('message: ' + msg);
        io.emit('chat message', msg);
    });

    socket.on('disconnect', function(){
        console.log('user disconnected');
    });
});

http.listen(process.env.PORT || 9000, function(){
    console.log('listening on *:9000');
});