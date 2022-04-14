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
    FROM Smith_Manager.Products`);
  return result;
};

const getByOrder = async (id: number): Promise<Product[]> => {
  const [result] = await connection.execute<any>(`
    SELECT
      id,
      name,
      amount,
      orderId
    FROM Smith_Manager.Products
    WHERE orderId = (?)`, [id]);
  const ordersIds = result.map((order: any) => order.id);
  return ordersIds;
};

const getById = async (id: number) => {
  const [result] = await connection.execute<ResultSetHeader>(`
    SELECT
      name,
      amount
    FROM Smith_Manager.Products
    WHERE id = (?)`, [id]);
  return result;
};

const create = async (body: Product) => {
  const { name, amount } = body;
  const [result] = await connection.execute<ResultSetHeader>(`
    INSERT INTO Smith_Manager.Products
      (name, amount)
    VALUES (?, ?)`, [name, amount]);
  return result.insertId;
};

const createWithOrderId = async (body: Product) => {
  const { name, amount, orderId } = body;
  const [result] = await connection.execute<ResultSetHeader>(`
    INSERT INTO Smith_Manager.Products
      (name, amount, orderId)
    VALUES (?, ?, ?)`, [name, amount, orderId]);
  return result.insertId;
};

export default {
  getAll,
  create,
  getByOrder,
  getById,
  createWithOrderId,
};