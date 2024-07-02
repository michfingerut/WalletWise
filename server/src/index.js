import express from 'express';

import logger from './logger.js';
import router from './routes.js';
import sequalize from './db/index.js';

//const startServer = () => {
//   const port = 3001; //TODO: env

//   const server = createServer().listen(port, () => {
//     logger.info(`application started on http://localhost:${port}`);
//     //init socket io
//   });
// };

// startServer();

const app = express();
app.get('/hello', (req, res) => {
  logger.info('someone send hello!');
  res.status(200).json('hello!!');
});

app.use('/', router);

app.listen(3001, () => {
  logger.info('server is running on port 3001');
});
