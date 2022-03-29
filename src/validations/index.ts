import ProductValidate from './products.validation';
import UserValidate from './users.validation';
import TokenValidate from './token.validation';
import OrderValidate from './orders.validation';

export const Product = ProductValidate;
export const User = UserValidate;
export const Order = OrderValidate;
export const Token = async (token: string) => TokenValidate(token);
