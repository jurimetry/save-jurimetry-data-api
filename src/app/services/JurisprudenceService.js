const Jurisprudence = require('../models/Jurisprudence');

module.exports.save = async (jJurisprudence) => {
    try {
        const jurisprudenceExists = await Jurisprudence.findOne({
            where: {
                court_abreviation: jJurisprudence.CourtAbreviation,
                class: jJurisprudence.Class,
                court_entry: jJurisprudence.Decision,
                court_decisor: jJurisprudence.CourtDecisor,
                court_session: jJurisprudence.CourtSession,
            },
        });

        if (jurisprudenceExists) {
            return null;
        }

        let date = new Date(jJurisprudence.DecisionDate);

        if (date === new Date('0001-01-01T00:00:00').getTime())
            date = new Date();

        const jurisprudence = await Jurisprudence.create({
            court_abreviation: `${jJurisprudence.CourtAbreviation}`,
            decision_date: date,
            class: `${jJurisprudence.Class}`,
            court_entry: `${jJurisprudence.CourtEntry}`,
            court_decisor: `${jJurisprudence.CourtDecisor}`,
            court_session: `${jJurisprudence.CourtSession}`,
            court_sumary: `${jJurisprudence.CourtSumary}`,
            jurisprudence_alltext: `${jJurisprudence.AllJurisprudenceText}`,
        });

        return jurisprudence;
    } catch (e) {
        throw Error(e.stack);
    }
};
