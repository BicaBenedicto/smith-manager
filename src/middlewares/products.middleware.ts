import { Response, Request, NextFunction } from 'express';
import { ProductValidate } from '../validations';
import { Product } from '../interfaces/products.interface';

export default class Products {
  public getAll = async (_req: Request, _res: Response, next: NextFunction): Promise<void> => (
    next()
  );

  public create = async (req: Request, _res: Response, next: NextFunction): Promise<void> => {
    const product = req.body as Product;
    const validate = ProductValidate.create(product);
    if (validate) return next(validate);
    return next();
  };
}
