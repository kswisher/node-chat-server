var socket = io();

socket.on('connect', function() {
  console.log('connected to the server');

  socket.emit('createMessage', {
    to: 'Wesley@home.com',
    text: 'hey i am watching cartoons'
  })
});

socket.on('disconnect', function() {
  console.log('disconnected from server');
});

socket.on('newMessage', function(message) {
  console.log('new message', message);
});
