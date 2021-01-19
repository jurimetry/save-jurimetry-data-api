const JurisprudenceService = require('../services/JurisprudenceService');

class JurisprudenceController {
    async store(req, res) {
        try {
            const saved = await JurisprudenceService.save(req.body);

            if (!saved) {
                return res.status(400).json({ error: 'User already exists' });
            }

            return res.status(200).json(saved);
        } catch {
            return res.status(400).json({ error: 'Error to save data' });
        }
    }
}

module.exports = new JurisprudenceController();
