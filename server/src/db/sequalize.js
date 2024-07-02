import { Sequelize } from 'sequelize';

const connectionString =
  'postgres://walletwise:walletwise@walletwise-db:5432/walletwise';
const sequelize = new Sequelize(connectionString, {
  dialect: 'postgres',
  logging: false,
});

export default sequelize;
