import { Response, Request } from 'express';
import { ProductsModel } from '../models';

const getAll = async (_req: Request, res: Response) => {
  const products = await ProductsModel.getAll();
  return res.status(200).json(products);
};

const create = async (req: Request, res: Response) => {
  const { body } = req;
  const insertId = await ProductsModel.create(body);
  return res.status(201).json({ item: { ...body, id: insertId } });
};

export default {
  getAll,
  create,
};
