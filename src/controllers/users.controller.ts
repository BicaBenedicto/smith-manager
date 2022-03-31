import { Response, Request, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { UsersModel } from '../models';
import { User, UserCreate } from '../interfaces/users.interface';

const JWT = 'trybe';

export default class UserClass {
  public create = async (req: Request, res: Response) => {
    const user = req.body as UserCreate;
    const insertId = await UsersModel.create(user);
    const token = jwt.sign({ username: user.username, id: insertId }, JWT);
    return res.status(201).json({ token });
  };

  public login = async (req: Request, res: Response, next: NextFunction) => {
    const user = req.body as User;
    const [userFound] = await UsersModel.getByLogin(user);
    if (!userFound) return next({ code: 401, error: 'Username or password invalid' });
    const token = jwt.sign(userFound, JWT);
    return res.status(200).json({ token });
  };
}
