export interface User {
  username: string,
  classe?: string,
  level?: number,
  password: string,
}

export interface UserCreate {
  username: string,
  classe: string,
  level: number,
  password: string,
}
