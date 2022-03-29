import jwt from 'jsonwebtoken';

export default async (key: string) => {
  try {
    const token = await jwt.verify(key, 'trybe');
    return token;
  } catch {
    return false;
  }
};
