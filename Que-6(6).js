// Install required package: socket.io

const http = require('http');
const socketIO = require('socket.io');

// Create a server using the http module
const server = http.createServer();

// Attach the server to the socket.io instance
const io = socketIO(server);

// Handle socket connection event
io.on('connection', (socket) => {
  console.log('A user connected.');

  // Emit a welcome message to the connected client
  socket.emit('welcome', 'Welcome to the server!');

  // Listen for a custom event from the client
  socket.on('customEvent', (data) => {
    console.log('Received custom event:', data);
  });

  // Emit a custom event to the client after a delay
  setTimeout(() => {
    socket.emit('customEvent', 'This is a custom event from the server.');
  }, 3000);

  // Handle socket disconnection event
  socket.on('disconnect', () => {
    console.log('A user disconnected.');
  });
});

// Start the server and listen on a specific port
server.listen(3000, () => {
  console.log('Server is running on port 3000.');
});
