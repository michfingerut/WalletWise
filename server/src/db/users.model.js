import { DataTypes } from 'sequelize';

import sequelize from './sequalize.js';

const Users = sequelize.define('users', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  modelName: 'users',
  timestamps: true,
});

export default Users;
