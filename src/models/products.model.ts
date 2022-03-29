import db from './connection';

const getAll = async () => {
  const [result] = await db.query(`
    SELECT
      id,
      name,
      amount,
      orderId
    FROM trybesmith.products`);
  return result;
};

export default {
  getAll,
};