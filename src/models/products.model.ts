import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { Product } from '../interfaces/products.interface';

const getAll = async () => {
  const [result] = await connection.execute(`
    SELECT
      id,
      name,
      amount,
      orderId
    FROM trybesmith.products`);
  return result;
};

const getByOrder = async (id: number): Promise<Product[]> => {
  const [result] = await connection.execute<any>(`
    SELECT
      id,
      name,
      amount,
      orderId
    FROM trybesmith.products
    WHERE orderId = (?)`, [id]);
  const ordersIds = result.map((order: any) => order.id);
  return ordersIds;
};

const create = async (body: Product) => {
  const [result] = await connection.execute<ResultSetHeader>(`
    INSERT INTO trybesmith.products
      (name, amount)
    VALUES (?, ?)`, [body.name, body.amount]);
  return result.insertId;
};

export default {
  getAll,
  create,
  getByOrder,
};