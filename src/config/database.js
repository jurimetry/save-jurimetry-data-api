module.exports = {
    dialect: 'postgres',
    host: 'ec2-52-44-139-108.compute-1.amazonaws.com',
    username: process.env.username,
    password: process.env.password,
    database: 'ddhhqf3lrh36s1',
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
    },
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        },
    },
};
