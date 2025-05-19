import { Sequelize } from "sequelize";

const db = new Sequelize('RECOVER_YOUR_DATA', 'root', '',{
    host: '34.45.173.63',
    dialect: 'mysql'
});

export default db;
