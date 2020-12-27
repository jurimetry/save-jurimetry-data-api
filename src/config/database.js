module.exports = {
    dialect: 'postgres',
    host: 'ec2-52-44-139-108.compute-1.amazonaws.com',
    username: 'gskutxpzrujbls',
    password:
        '74ae60662e5109135465d0bd124188a54cfbebe2efd4077885692c6efd1b324d',
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
