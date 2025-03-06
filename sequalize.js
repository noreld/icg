import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './users.sqlite',
});


(async () => {
    await sequelize.sync({ alter: true });
})();

export default sequelize;
