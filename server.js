const net = require('net');
const fs = require('fs');

const server = net.createServer((socket) => {
  console.log('Client connected');

  socket.on('data', (data) => {
    const fileName = data.toString().trim();
    console.log(`Received request for file: ${fileName}`);

    fs.readFile(fileName, 'utf8', (err, fileData) => {
      if (err) {
        console.error(`Error reading file: ${err}`);
        socket.write(`Error reading file: ${err}`);
      } else {
        socket.write(fileData);
      }
      socket.end();
    });
  });

  socket.on('end', () => {
    console.log('Client disconnected');
  });
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

