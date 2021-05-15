// in this example we use the integrated node http server
const http = require('http').createServer();

// import socket io and disable CORS for easier development (not recommended for production)
const io = require('socket.io')(http, {
    cors: { 
        origin: '*'
     }
});

// establish a connection
io.on('connection', (socket) => {
    console.log('Connection established!');

    // react to messages that the clients send
    socket.on('message', (message) => {
        console.log(message);
        // distribute messages across all clients
        io.emit('message', message);
    });
});

// make the http server listen on http://localhost:8080 and the Socket io server on ws://localhost:8080
http.listen(8080, () => {console.log('Server is listening on http://localhost:8080')});