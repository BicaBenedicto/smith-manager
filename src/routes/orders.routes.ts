import express from 'express';
import { OrdersController } from '../controllers';
import { OrdersMiddleware } from '../middlewares';

const router = express.Router();

const ordersController = new OrdersController();
const ordersMiddleware = new OrdersMiddleware();

router.get('/', ordersMiddleware.getAll, ordersController.getAll);
router.post('/', ordersMiddleware.create, ordersController.create);

export default router;
