import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { User } from '../interfaces/users.interface';

const create = async (body: User) => {
  const [result] = await connection.execute<ResultSetHeader>(`
    INSERT INTO Trybesmith.Users
      (username, classe, level, password)
    VALUES (?, ?, ?, ?)`, [body.username, body.classe, body.level, body.password]);
  return result.insertId;
};

const getByLogin = async (body: User) => {
  const [result] = await connection.execute(
    `SELECT
      id,
      username
    FROM Trybesmith.Users
    WHERE username = (?)
    AND password = (?)`,
    [body.username, body.password],
  );

  return result as User[];
};

export default {
  create,
  getByLogin,
};