import { exec } from 'child_process';
import open from 'open';

// Start the server
const server = exec('node app.js');

// Wait a bit to ensure the server is running before opening the browser
setTimeout(() => {
  // Open the browser
  open('http://localhost:3000'); // Replace 3000 with your port number
}, 2000); // Adjust the delay as needed

// Log server output
server.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

server.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});
