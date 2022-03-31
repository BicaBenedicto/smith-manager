interface User {
  id: number,
  username: string,
}

export interface Order {
  id?: number,
  userId?: number,
  products: number[],
  user: User,
}

export interface OrderGet {
  id: number,
  userId: number,
  products: number[],
}
