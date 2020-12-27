import Jurisprudence from '../models/Jurisprudence';

class JurisprudenceController {
    async store(req, res) {
        const jurisprudence = await Jurisprudence.create(req.body);

        return res.json(jurisprudence);
    }
}

export default new JurisprudenceController();
