import { Response, Request } from 'express';
import { ProductsModel } from '../models';

const getAll = async (_req: Request, res: Response) => {
  const products = await ProductsModel.getAll();
  return res.status(200).json(products);
};

export default {
  getAll,
};
