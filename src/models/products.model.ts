import { ResultSetHeader } from 'mysql2';
import db from './connection';
import { Product } from '../interfaces/products.interface';

const getAll = async () => {
  const [result] = await db.execute(`
    SELECT
      id,
      name,
      amount,
      orderId
    FROM trybesmith.products`);
  return result;
};

const create = async (body: Product) => {
  const [result] = await db.execute<ResultSetHeader>(`
    INSERT INTO trybesmith.products
      (name, amount)
    VALUES (?, ?)`, [body.name, body.amount]);
  return result.insertId;
};

export default {
  getAll,
  create,
};