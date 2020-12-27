module.exports = {
    dialect: 'postgres',
    host: 'host',
    username: 'username',
    password: 'password',
    database: 'ddhhqf3lrh36s1',
    define: {
        timestamps: true,
        undescored: true,
        undescoredAll: true,
    },
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        },
    },
};
