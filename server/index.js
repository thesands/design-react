import express from 'express';
import http from 'http';
import socketio from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

app.post('/webhook', (req, res) => {
  const { data } = req.body;
  // Do something with the data here, such as processing it or sending it to another service
  io.emit('webhook', data);
  res.status(200).json({ message: 'Webhook received' });
});

server.listen(3000, () => {
  console.log('Server started on port 3000');
});
