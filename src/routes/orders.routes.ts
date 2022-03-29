import express from 'express';
import { OrdersController } from '../controllers';
import { OrdersMiddleware } from '../middlewares';

const router = express.Router();

router.get('/', OrdersMiddleware.getAll, OrdersController.getAll);

export default router;
