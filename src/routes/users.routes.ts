import express from 'express';
import { UsersController } from '../controllers';
import { UsersMiddleware } from '../middlewares';

const router = express.Router();

const usersMiddleware = new UsersMiddleware();
const usersController = new UsersController();

router.post('/', usersMiddleware.create, usersController.create);

export default router;
