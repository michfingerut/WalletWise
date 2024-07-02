import Users from './users.model.js';
import Spends from './spends.model.js';
import logger from '../logger.js';

const syncModels = async () => {
  await Users.sync();
  logger.info('Users table has been created successfuly');

  await Spends.sync();
  logger.info('Spends table has been created successfuly');
};

const createAssociations = async () => {
  await Users.hasMany(Spends, {
    foreignKey: { allowNull: false },
    onDelete: 'CASCADE',
  });

  await Spends.belongsTo(Users, {
    foreignKey: { name: 'uuid', allowNull: false },
    onDelete: 'CASCADE',
  });
};

export { createAssociations, syncModels };
