import { Response, Request } from 'express';
import { ProductsModel } from '../models';
import { Product } from '../interfaces/products.interface';

export default class Products {
  public getAll = async (_req: Request, res: Response) => {
    const products = await ProductsModel.getAll();
    return res.status(200).json(products);
  };

  public create = async (req: Request, res: Response) => {
    const product = req.body as Product;
    const insertId = await ProductsModel.create(product);
    return res.status(201).json({ item: { ...product, id: insertId } });
  };
}
