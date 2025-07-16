import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('url_db', 'root', 'Aditya@04', {
  host: 'localhost',
  dialect: 'mysql',
});

export default sequelize;