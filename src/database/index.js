import Sequelize from 'sequelize';

import Jurisprudence from '../app/models/Jurisprudence';

import databaseConfig from '../config/database';

const models = [Jurisprudence];

class Database {
    constructor() {
        this.init();
    }

    init() {
        this.connection = new Sequelize(databaseConfig);

        models.map((model) => model.init(this.connection));
    }
}

module.exports = new Database();
