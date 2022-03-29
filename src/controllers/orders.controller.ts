import { Response, Request } from 'express';
import { OrdersModel } from '../models';

const getAll = async (_req: Request, res: Response) => {
  const orders = await OrdersModel.getAll();
  return res.status(200).json(orders);
};

export default {
  getAll,
};
