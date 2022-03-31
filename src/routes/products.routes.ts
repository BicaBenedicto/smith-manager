import express from 'express';
import { ProductsController } from '../controllers';
import { ProductsMiddleware } from '../middlewares';

const router = express.Router();

const productsController = new ProductsController();
const productsMiddleware = new ProductsMiddleware();

router.get('/', productsMiddleware.getAll, productsController.getAll);
router.post('/', productsMiddleware.create, productsController.create);

export default router;
