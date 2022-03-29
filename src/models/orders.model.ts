import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import ProductsModel from './products.model';
import { Order } from '../interfaces/orders.interface';

const getAll = async () => {
  const [result] = await connection.execute<Order[] | any>(`
    SELECT
      id,
      userId
    FROM Trybesmith.Orders`);
  const output = await Promise.all(result
    .map(async (order: any) => ({
      ...order,
      products: await ProductsModel.getByOrder(order.id),
    })));
  return output;
};

const create = async (userId: number) => {
  const [result] = await connection.execute<ResultSetHeader>(`
    INSERT INTO Trybesmith.Orders
      (userId)
    VALUES (?)`, [userId]);
  return result.insertId;
};

export default {
  getAll,
  create,
};
