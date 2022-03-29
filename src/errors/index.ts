import { NextFunction, Request, Response } from 'express';

const errorsGenericMiddleware = (err: any, req: Request, res: Response, _next: NextFunction) => {
  if (err.code) {
    const { code, error } = err;
    return res.status(code).json({ error });
  }
  console.log(err);
  return res.status(500).json({ error: 'Interval error' });
};

export default errorsGenericMiddleware;
