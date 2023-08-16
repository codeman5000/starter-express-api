const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

const connections = [];

wss.on('connection', (ws) => {
  connections.push(ws);

  ws.on('message', (message) => {
    // Handle incoming message (in this case, assuming it's a URL)
    console.log('Received URL:', message);
    // You can do something with the URL here
  });

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
