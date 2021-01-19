const Jurisprudence = require('../models/Jurisprudence');

module.exports.save = async (jJurisprudence) => {
    try {
        // const jurisprudenceExists = await Jurisprudence.findOne({
        //     where: {
        //         court_abreviation: jJurisprudence.CourtAbreviation,
        //         decision_date: jJurisprudence.DecisionDate,
        //         class: jJurisprudence.Class,
        //         decision: jJurisprudence.Decision,
        //         court_decisor: jJurisprudence.CourtDecisor,
        //         court_session: jJurisprudence.CourtSession,
        //     },
        // });

        // if (jurisprudenceExists) {
        //     return null;
        // }

        // console.log(await Jurisprudence.getTableName());

        let date = new Date(jJurisprudence.DecisionDate);

        if (date === new Date('0001-01-01T00:00:00').getTime())
            date = new Date();

        const jurisprudence = await Jurisprudence.create({
            court_abreviation: `${jJurisprudence.CourtAbreviation}`,
            decision_date: date,
            class: `${jJurisprudence.Class}`,
            decision: `${jJurisprudence.Decision}`,
            court_decisor: `${jJurisprudence.CourtDecisor}`,
            court_session: `${jJurisprudence.CourtSession}`,
            created_at: Date.now(),
        });

        return jurisprudence;
    } catch (e) {
        throw Error(e.stack);
    }
};
