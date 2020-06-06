import express from 'express';
const routes = express.Router();


//controllers
import ItemsController from './controllers/itemsController'
const itemsController = new ItemsController();
import PointsController from './controllers/pointersController'
const pointsController = new PointsController();

routes.get('/items', itemsController.index)

routes.post('/points',pointsController.create);
routes.get('/points',pointsController.index);
routes.get('/points/:id',pointsController.show);

export default  routes;