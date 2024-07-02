import logger from './logger.js';
import express from 'express';

//const startServer = () => {
//   const port = 3001; //TODO: env

//   const server = createServer().listen(port, () => {
//     logger.info(`application started on http://localhost:${port}`);
//     //init socket io
//   });
// };

// startServer();

const app = express();
app.get('/', (req, res) => {
  res.send('hello!!');
});

app.listen(3001, () => {
  logger.info('server is running on port 3001');
});
