import { Sequelize } from 'sequelize';

//TODO: env
const connectionString =
  'postgresql://walletwise:walletwise@walletwise-db:5432/walletwise';
const sequelize = new Sequelize(connectionString, {
  dialect: 'postgres',
  logging: false,
});

export default sequelize;
