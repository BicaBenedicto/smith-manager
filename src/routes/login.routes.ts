import express from 'express';
import { UsersController } from '../controllers';
import { UsersMiddleware } from '../middlewares';

const router = express.Router();

router.post('/', UsersMiddleware.login, UsersController.login);

export default router;
