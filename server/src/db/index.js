import logger from '../logger.js';
import sequelize from './sequalize.js';
import createAssociations from './modelSetup.js';
import Users from './users.model.js';
import Spends from './spends.model.js';

try {
  await Users.sync();
  await Spends.sync();

  await createAssociations();
  logger.info('tables created successfuly');
  await sequelize.authenticate();
  logger.info('connection to sequelize established successfuly');
} catch (err) {
  logger.error(
    `unable to create tables and establish sequalize connection -> ${JSON.stringify(
      err,
      null,
      2,
    )} `,
  );
}

export default sequelize;
