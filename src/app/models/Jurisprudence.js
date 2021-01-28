const Sequelize = require('sequelize');

class Jurisprudence extends Sequelize.Model {
    static init(sequelize) {
        super.init(
            {
                court_abreviation: Sequelize.STRING,
                decision_date: Sequelize.DATE,
                class: Sequelize.STRING,
                court_entry: Sequelize.STRING,
                court_decisor: Sequelize.STRING,
                court_session: Sequelize.STRING,
                court_sumary: Sequelize.STRING,
                jurisprudence_alltext: Sequelize.STRING,
            },
            {
                sequelize,
                timestamps: false,
            }
        );

        console.log('sequelize');
        console.log(Jurisprudence === sequelize.models.Jurisprudence);

        return this;
    }
}

module.exports = Jurisprudence;
