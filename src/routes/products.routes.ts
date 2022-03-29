import express from 'express';
import { ProductsController } from '../controllers';
import { ProductsMiddleware } from '../middlewares';

const router = express.Router();

router.get('/', ProductsMiddleware.getAll, ProductsController.getAll);
router.post('/', ProductsMiddleware.create, ProductsController.create);

export default router;
