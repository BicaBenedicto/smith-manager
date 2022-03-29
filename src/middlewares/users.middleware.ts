import { Response, Request, NextFunction } from 'express';
import { User } from '../validations';

const create = async (req: Request, _res: Response, next: NextFunction) => {
  const { body } = req;
  const validate = User.create(body);
  if (validate) return next(validate);
  return next();
};

const login = async (req: Request, _res: Response, next: NextFunction) => {
  const { body } = req;
  const validate = User.login(body);
  if (validate) return next(validate);
  return next();
};

export default {
  create,
  login,
};
