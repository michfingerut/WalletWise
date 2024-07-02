import { DataTypes } from 'sequelize';

import sequelize from './sequalize.js';

//TODO -> תשלומים?
const Spends = sequelize.define('spends', {
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  type: {
    type: DataTypes.ENUM({
      values: [
        'transaction',
        'dinning',
        'groceries',
        'electric and fuel',
        'cosmetics',
        'concerts',
        'vacation related',
        'others',
      ],
    }),
    allowNull: false,
  },
});

export default Spends;
