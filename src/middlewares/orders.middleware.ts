import { Response, Request, NextFunction } from 'express';
import { Token, OrderValidate } from '../validations';

export default class Orders {
  public getAll = async (_req: Request, _res: Response, next: NextFunction) => next();

  public create = async (req: Request, _res: Response, next: NextFunction) => {
    const { authorization } = req.headers;
    if (!authorization) return next({ code: 401, error: 'Token not found' });
    const validate = await Token(authorization);
    if (!validate) return next({ code: 401, error: 'Invalid token' });
    const validateOrder = OrderValidate.create(req.body);
    if (validateOrder) return next(validateOrder);
    req.body = { ...req.body, user: validate };
    return next();
  };
}
