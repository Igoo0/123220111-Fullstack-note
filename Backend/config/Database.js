import { Sequelize } from "sequelize";

const db = new Sequelize('RECOVER_YOUR_DATA', 'root', '',{
    host: '34.101.124.245',
    dialect: 'mysql'
});

export default db;
