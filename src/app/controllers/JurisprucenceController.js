import JurisprudenceService from '../services/JurisprudenceService';

class JurisprudenceController {
    async store(req, res) {
        try {
            const saved = await JurisprudenceService.save(req.body);

            if (!saved) {
                return res.status(400).json({ error: 'User already exists' });
            }

            return res.json(saved);
        } catch {
            return res.status(400).json({ error: 'Error to save data' });
        }
    }
}

export default new JurisprudenceController();
