import jwt, { JwtPayload } from 'jsonwebtoken';

export default async (key: string): Promise<string | boolean | JwtPayload> => {
  try {
    const token = await jwt.verify(key, 'trybe');
    return token;
  } catch {
    return false;
  }
};
