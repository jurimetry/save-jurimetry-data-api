import Jurisprudence from '../models/Jurisprudence';

export default (req, res, next) => {
    Jurisprudence.create(req.body).then((x) => {
        if (!x.court_abreviation) {
            return res.status(400).json({ error: 'court not provided' });
        }

        return next();
    });
};
