import Jurisprudence from '../models/Jurisprudence';

class JurisprudenceService {
    async save(jJurisprudence) {
        try {
            const jurisprudenceExists = await Jurisprudence.findOne({
                where: {
                    court_abreviation: jJurisprudence.court_abreviation,
                    decision_date: jJurisprudence.decision_date,
                    class: jJurisprudence.class,
                    decision: jJurisprudence.decision,
                    court_decisor: jJurisprudence.court_decisor,
                    court_session: jJurisprudence.court_session,
                },
            });

            if (jurisprudenceExists) {
                return null;
            }

            const jurisprudence = await Jurisprudence.create(jJurisprudence);

            return jurisprudence;
        } catch (e) {
            throw Error('Can not save data');
        }
    }
}

export default new JurisprudenceService();
