import { Router } from 'express';

import JurisprudenceController from './app/controllers/JurisprucenceController';

import jurisprudenceverify from './app/middlewares/JurisprucenceValidation';

const routes = new Router();

routes.get('/', (req, res) => res.json({ message: 'Is Alive' }));

routes.post(
    '/jurisprudence',
    jurisprudenceverify,
    JurisprudenceController.store
);

export default routes;
