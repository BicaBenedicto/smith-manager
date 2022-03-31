import { Response, Request, NextFunction } from 'express';
import { UserValidate } from '../validations';
import { User, UserCreate } from '../interfaces/users.interface';

export default class UserClass {
  public create = async (req: Request, _res: Response, next: NextFunction): Promise<void> => {
    const user = req.body as UserCreate;
    const validate = UserValidate.create(user);
    if (validate) return next(validate);
    return next();
  };

  public login = async (req: Request, _res: Response, next: NextFunction): Promise<void> => {
    const user = req.body as User;
    const validate = UserValidate.login(user);
    if (validate) return next(validate);
    return next();
  };
}
