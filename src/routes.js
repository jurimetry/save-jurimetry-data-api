import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => res.json({ message: 'Is Alive' }));

export default routes;
