import { Sequelize } from "sequelize";

const db = new Sequelize('note_db', 'root', '',{
    host: '34.101.124.245',
    dialect: 'mysql'
});

export default db;
