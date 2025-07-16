import { DataTypes } from 'sequelize';
import sequelize from '../db.js';

const Url = sequelize.define('Url', {
  shortCode: {
    type: DataTypes.STRING(10),
    unique: true,
    allowNull: false,
  },
  longUrl: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

export default Url;
