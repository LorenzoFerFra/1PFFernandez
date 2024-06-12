export type UserRole = 'ADMIN' | 'USER';
 

export interface IUser {
    id: string;
    name: string;
    weight: number;
    lastName: string;
    email: string;
    role: UserRole;
    createdAt: Date;
  }
  export interface IUserPayload{
    name: string | null;
    weight: number| null;
    lastName: string | null;
    email: string | null;
    role: UserRole | null;
    createdAt: Date | null;
  }