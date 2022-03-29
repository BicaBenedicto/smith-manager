import connection from './connection';
import ProductsModel from './products.model';
import { Order } from '../interfaces/orders.interface';

const getAll = async () => {
  const [result] = await connection.execute<Order[] | any>(`
    SELECT
      id,
      userId
    FROM orders`);
  const output = await Promise.all(result
    .map(async (order: any) => ({
      ...order,
      products: await ProductsModel.getByOrder(order.id),
    })));
  return output;
};

export default {
  getAll,
};
