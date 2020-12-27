module.exports = {
    dialect: 'postgres',
    host: 'ec2-52-44-139-108.compute-1.amazonaws.com',
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
