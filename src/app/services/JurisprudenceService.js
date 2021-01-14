import Jusrisprudence from '../models/Jurisprudence';

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

        let date = new Date(jJurisprudence.DecisionDate);

        if (date === new Date('0001-01-01T00:00:00').getTime()) date = null;

        const x = JSON.stringify({
            court_abreviation: String(jJurisprudence.CourtAbreviation),
            decision_date: date,
            class: String(jJurisprudence.Class),
            decision: String(jJurisprudence.Decision),
            court_decisor: String(jJurisprudence.CourtDecisor),
            court_session: String(jJurisprudence.CourtSession),
        });

        const jurisprudenceModel = JSON.parse(x);

        console.log('service');
        console.log(jurisprudenceModel);

        const jurisprudence = await Jusrisprudence.create(jurisprudenceModel);

        return jurisprudence;
    } catch (e) {
        throw Error(e.stack);
    }
};
