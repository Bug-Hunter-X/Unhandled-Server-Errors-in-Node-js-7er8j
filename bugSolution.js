const http = require('http');
const logger = require('winston'); //Example of using a more robust logger

logger.level = 'info';

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});

// Improved error handling with detailed logging
server.on('error', (err) => {
  switch (err.code) {
    case 'EADDRINUSE':
      logger.error('Address in use, is the port already in use?');
      break;
    case 'EACCES':
      logger.error('Permission denied, insufficient permissions to use the port.');
      break;
    default:
      logger.error('An unexpected error occurred:', { err });
  }
});

server.listen(3000, () => {
  logger.info('Server listening on port 3000');
});
