import { JwtPayload } from 'jsonwebtoken';
import Product from './products.validation';
import User from './users.validation';
import Order from './orders.validation';
import TokenValidate from './token.validation';

export const ProductValidate = Product;
export const UserValidate = User;
export const OrderValidate = Order;
export const Token = async (token: string): Promise<string | boolean | JwtPayload> => (
  TokenValidate(token)
);
