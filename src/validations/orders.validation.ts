const TYPES = {
  productEmpty: {
    code: 400,
    error: 'Products is required',
  },
  productBeNumber: {
    code: 422,
    error: 'Products must be an array of numbers',
  },
  productUndefined: {
    code: 422,
    error: 'Products can\'t be empty',
  },
};

const verifyProducts = (products: number[]) => {
  if (!products) return TYPES.productEmpty;
  if (!Array.isArray(products)) return TYPES.productBeNumber;
  if (!products[0]) return TYPES.productUndefined;
  const checkTypes = products.some((item: any) => typeof item !== 'number');
  if (checkTypes) return TYPES.productBeNumber;
  return false;
};

export default {
  create: (body: any) => {
    const { products } = body;
    if (verifyProducts(products)) return verifyProducts(products);
    
    return false;
  },
};
