const Jurisprudence = require('../models/Jurisprudence');

module.exports = (req, res, next) => {
    Jurisprudence.create(req.body).then((x) => {
        if (!x.court_abreviation) {
            return res.status(400).json({ error: 'court not provided' });
        }

        return next();
    });
};
