import express from 'express';

import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';

const routes = express.Router();

routes.get('/user', ClassesController.index);
routes.post('/user', ClassesController.create);
routes.delete('/user/:id', ClassesController.delete);

routes.get('/connections', ConnectionsController.index);
routes.post('/connections', ConnectionsController.create);

export default routes;  