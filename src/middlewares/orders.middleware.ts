import { Response, Request, NextFunction } from 'express';
import { Token, Order } from '../validations';

const getAll = async (_req: Request, _res: Response, next: NextFunction) => next();

const create = async (req: Request, _res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  if (!authorization) return next({ code: 401, error: 'Token not found' });
  const validate = await Token(authorization);
  if (!validate) return next({ code: 401, error: 'Invalid token' });
  const validateOrder = Order.create(req.body);
  if (validateOrder) return next(validateOrder);
  req.body = { ...req.body, user: validate };
  return next();
};

export default {
  getAll,
  create,
};
