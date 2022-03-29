import { Response, Request } from 'express';
import jwt from 'jsonwebtoken';
import { UsersModel } from '../models';

const create = async (req: Request, res: Response) => {
  const { body } = req;
  const insertId = await UsersModel.create(body);
  const token = jwt.sign({ data: { ...body, id: insertId } }, 'trybe');
  return res.status(201).json({ token });
};

export default {
  create,
};
