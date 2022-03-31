import { Product } from '../interfaces/products.interface';

const TYPES = {
  nameEmpty: {
    code: 400,
    error: 'Name is required',
  },
  nameBeString: {
    code: 422,
    error: 'Name must be a string',
  },
  nameBeLonger: {
    code: 422,
    error: 'Name must be longer than 2 characters',
  },
  amountEmpty: {
    code: 400,
    error: 'Amount is required',
  },
  amountBeString: {
    code: 422,
    error: 'Amount must be a string',
  },
  amountBeLonger: {
    code: 422,
    error: 'Amount must be longer than 2 characters',
  },
};

const verifyName = (name: string): object | boolean => {
  if (!name) return TYPES.nameEmpty;
  if (typeof name !== 'string') return TYPES.nameBeString;
  if (name.length < 3) return TYPES.nameBeLonger;
  return false;
};

const verifyAmount = (amount: string): object | boolean => {
  if (!amount) return TYPES.amountEmpty;
  if (typeof amount !== 'string') return TYPES.amountBeString;
  if (amount.length < 3) return TYPES.amountBeLonger;
  return false;
};

const ProductValidate = {
  create: (body: object): object | boolean => {
    const { name, amount } = body as Product;
    if (verifyName(name)) return verifyName(name);
    if (verifyAmount(amount)) return verifyAmount(amount);
    return false;
  },
};

export default ProductValidate;
