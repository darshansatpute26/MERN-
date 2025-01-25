// server.mjs
var http = require('http');
var fs = require('fs');
var os = require('os');
const { assert } = require('console');

// Log system information
console.log("Free memory:", os.freemem()); // Log available memory
console.log("CPU info:", os.cpus()); // Log CPU information
console.log("Normal Log");
console.warn("Danger");
console.assert(true,"transection completed");
console.assert(false,"transection failed");

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (req.url == "/") {
    // Check if the file 'notes.txt' exists and read it
    fs.readFile("notes.txt", (error, data) => {
      if (error) {
        // If there is an error (file not found or other issues), send 500 error response
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end("Error reading the file.");
        console.error("Error reading the file:", error);
      } else {
        // If file is read successfully, send its content as response
        res.write(data);
        res.end();
      }
    });
  } else {
    // Handle cases where the URL is not the root
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end("Page not found");
  }
});

// Start the server on port 3000
server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});
