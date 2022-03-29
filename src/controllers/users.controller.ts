import { Response, Request, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { UsersModel } from '../models';

const JWT = 'trybe';

const create = async (req: Request, res: Response) => {
  const { body } = req;
  const insertId = await UsersModel.create(body);
  const token = jwt.sign({ ...body, id: insertId }, JWT);
  return res.status(201).json({ token });
};

const login = async (req: Request, res: Response, next: NextFunction) => {
  const { body } = req;
  const [user] = await UsersModel.getByLogin(body);
  if (!user) return next({ code: 401, error: 'Username or password invalid' });
  const token = jwt.sign(user, JWT);
  return res.status(200).json({ token });
};

export default {
  create,
  login,
};
