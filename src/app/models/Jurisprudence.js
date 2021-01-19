const Sequelize = require('sequelize');

class Jurisprudence extends Sequelize.Model {
    static init(sequelize) {
        super.init(
            {
                court_abreviation: Sequelize.STRING,
                decision_date: Sequelize.DATE,
                class: Sequelize.STRING,
                decision: Sequelize.STRING,
                court_decisor: Sequelize.STRING,
                court_session: Sequelize.STRING,
            },
            {
                sequelize,
            }
        );

        console.log('sequelize');
        console.log(Jurisprudence === sequelize.models.Jurisprudence);

        return this;
    }
}

module.exports = Jurisprudence;
