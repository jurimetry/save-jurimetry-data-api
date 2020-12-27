import Jurisprudence from '../models/Jurisprudence';

class JurisprudenceController {
    async store(req, res) {
        const jurisprudenceExists = await Jurisprudence.findOne({
            where: {
                court_abreviation: req.body.court_abreviation,
                decision_date: req.body.decision_date,
                class: req.body.class,
                decision: req.body.decision,
                court_decisor: req.body.court_decisor,
                court_session: req.body.court_session,
            },
        });

        if (jurisprudenceExists) {
            return res.status(400).json({ error: 'User already exists' });
        }

        const jurisprudence = await Jurisprudence.create(req.body);

        return res.json(jurisprudence);
    }
}

export default new JurisprudenceController();
