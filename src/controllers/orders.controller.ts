import { Response, Request } from 'express';
import { OrdersModel, ProductsModel } from '../models';

const getAll = async (_req: Request, res: Response) => {
  const orders = await OrdersModel.getAll();
  return res.status(200).json(orders);
};

const create = async (req: Request, res: Response) => {
  const { body } = req;
  await Promise.all(body.products
    .map(async (item: number) => ProductsModel.getById(item)));
  await OrdersModel.create(body.user.id);

  return res.status(201).json({ order: { userId: body.user.id, products: body.products } });
};

export default {
  getAll,
  create,
};
