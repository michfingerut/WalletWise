import express from 'express';

import usersControllers from './controllers/users.controllers.js';
import spendsControllers from './controllers/spends.controllers.js';

const router = express.Router();

router
  .route('/users')
  .get(usersControllers.getUserById)
  .patch(usersControllers.patchUser)
  .post(usersControllers.postUser)
  .delete(usersControllers.deleteUser);

router
  .route('/spends')
  .get(spendsControllers.getSpendsByUser)
  .post(spendsControllers.postSpend)
  .delete(spendsControllers.deleteSpend);

export default router;
