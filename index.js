const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

const connections = [];

wss.on('connection', (ws) => {
  connections.push(ws);

  // Send a message to the client
  ws.send('Hello, client!');
});

// Send a message to all connected clients every second
setInterval(() => {
  const message = 'This is a message from the server';
  connections.forEach((ws) => {
    ws.send(message);
  });
}, 1000);
