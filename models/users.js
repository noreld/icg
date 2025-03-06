import { DataTypes } from 'sequelize';
import sequelize from '../lib/sequelize';

const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  approximate_job: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  percentage: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 0,
      max: 100
    }
  }
});

export default User;
