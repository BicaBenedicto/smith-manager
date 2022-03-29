import express from 'express';
import { ProductsRouter, UsersRouter, OrdersRouter, LoginRouter } from './routes';
import errorsGenericMiddleware from './errors';

const app = express();

app.use(express.json());

app.use('/products', ProductsRouter);
app.use('/users', UsersRouter);
app.use('/login', LoginRouter);
app.use('/orders', OrdersRouter);

app.use(errorsGenericMiddleware);

export default app;
