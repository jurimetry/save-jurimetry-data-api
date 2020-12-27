import { Router } from 'express';

import JurisprudenceController from './app/controllers/JurisprucenceController';

const routes = new Router();

routes.get('/', (req, res) => res.json({ message: 'Is Alive' }));

routes.post('/jurisprudence', JurisprudenceController.store);

export default routes;
