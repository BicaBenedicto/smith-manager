import { Response, Request } from 'express';
import { OrdersModel, ProductsModel } from '../models';
import { Order } from '../interfaces/orders.interface';

export default class Orders {
  public getAll = async (_req: Request, res: Response) => {
    const orders = await OrdersModel.getAll();
    return res.status(200).json(orders);
  };

  public create = async (req: Request, res: Response) => {
    const order = req.body as Order;
    await Promise.all(order.products
      .map(async (item: number) => ProductsModel.getById(item)));
    await OrdersModel.create(order.user.id);

    return res.status(201).json({ order: { userId: order.user.id, products: order.products } });
  };
}
