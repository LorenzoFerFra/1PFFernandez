import { IProduct } from './models';

export class ProductsMockService {
  getProducts(): IProduct[] {
    return [
      {
        id: 2,
        name: 'Producto ejemplo 1',
        price: 9999,
      },
      {
        id: 2,
        name: 'Producto ejemplo 2',
        price: 2000,
      },
    ];
  }
}