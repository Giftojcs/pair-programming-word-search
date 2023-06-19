const net = require('net');

const client = new net.Socket();
const fileName = process.argv[2];

client.connect(3000, 'localhost', () => {
  console.log('Connected to server');
  console.log(`Requesting file: ${fileName}`);
  client.write(fileName);
});

client.on('data', (data) => {
  console.log(`Received file data:\n${data}`);
  client.destroy();
});

client.on('close', () => {
  console.log('Connection closed');
});

