module.exports = {
    HOST: 'localhost',
    USER: 'root',
    PASSWORD: 'Marstirth7677',
    DB: 'Tempdb',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};