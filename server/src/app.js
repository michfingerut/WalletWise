import express from 'express';
import { createServer } from 'node:http';

const startServer = () => {
  const app = express();
  const httpServer = createServer(app);

  app.get('/', (req, res, next) => {
    logger.info('first message');
    res.json('hello!');

    next();
  });

  return httpServer;
};

export default startServer;
