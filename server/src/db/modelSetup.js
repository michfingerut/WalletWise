import Users from './users.model.js';
import Spends from './spends.model.js';

const createAssociations = async () => {
  await Spends.belongsTo(Users, {
    foreignKey: { name: 'uuid', allowNull: false },
    onDelete: 'CASCADE',
  });
  await Users.hasMany(Spends, {
    foreignKey: { allowNull: false },
    onDelete: 'CASCADE',
  });
};

export default createAssociations;
