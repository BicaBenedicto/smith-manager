import { ResultSetHeader } from 'mysql2';
import db from './connection';
import { User } from '../interfaces/users.interface';

const create = async (body: User) => {
  const [result] = await db.execute<ResultSetHeader>(`
    INSERT INTO trybesmith.users
      (username, classe, level, password)
    VALUES (?, ?, ?, ?)`, [body.username, body.classe, body.level, body.password]);
  return result.insertId;
};

export default {
  create,
};