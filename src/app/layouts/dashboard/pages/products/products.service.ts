import { Injectable } from '@angular/core';

@Injectable()
export class ProductsService {
  constructor() { }
  getProducts(){
     return [
      {
      id: 1,
      name: 'Smash bros ultimate',
      price: 60
     }
    ];
  }
}
