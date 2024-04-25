export type UserRole = 'ADMIN' | 'USER';
 

export interface IUser {
    id: number;
    name: string;
    weight: number;
    email: string;
    role: UserRole;
    createdAt: Date;
  }