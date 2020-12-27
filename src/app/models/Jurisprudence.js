import Sequelize, { Model } from 'sequelize';

class Jurisprudence extends Model {
    static init(sequelize) {
        super.init(
            {
                court_abreviation: Sequelize.STRING,
                decision_date: Sequelize.STRING,
                class: Sequelize.STRING,
                decision: Sequelize.STRING,
                court_decisor: Sequelize.STRING,
                court_session: Sequelize.STRING,
            },
            {
                sequelize,
            }
        );
    }
}

export default Jurisprudence;
