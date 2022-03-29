import express from 'express';
import { ProductsRouter } from './routes';
import errorsGenericMiddleware from './errors';

const app = express();

app.use(express.json());

app.use('/products', ProductsRouter);

app.use(errorsGenericMiddleware);

export default app;
