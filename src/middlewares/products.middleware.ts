import { Response, Request, NextFunction } from 'express';
import Product from '../validations';

const getAll = async (_req: Request, _res: Response, next: NextFunction) => next();

const create = async (req: Request, _res: Response, next: NextFunction) => {
  const { body } = req;
  const validate = Product.create(body);
  if (validate) return next(validate);
  return next();
};

export default {
  getAll,
  create,
};
