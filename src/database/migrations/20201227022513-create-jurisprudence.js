module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('jurisprudences', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            court_abreviation: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            decision_date: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            class: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            court_entry: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            court_decisor: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            court_session: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            court_sumary: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            jurisprudence_alltext: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: true,
            },
        });
    },

    down: async (queryInterface) => {
        await queryInterface.dropTable('jurisprudences');
    },
};
