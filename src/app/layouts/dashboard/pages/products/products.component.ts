import { Component, Inject, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import { IProduct } from './models/index';
import { API_URL, PRODUCTS, RANDOM_NUMBER } from './products.module';
import { AlertsService } from '../../../../core/services/alerts.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
  displayedColumns= ['id', 'name', 'price', 'actions'];

    
    //products: IProduct[] = [];

  constructor(private productService: ProductsService,
    private alertService: AlertsService,
    @Inject(API_URL) private apiUlr: string,
    @Inject(RANDOM_NUMBER) private numeroAleatorio: number,
    @Inject(PRODUCTS) public products: IProduct[],
    ){ 
      this.alertService.notifier$.subscribe({
        next: (message) => console.log(message),
      });
  }
  ngOnInit(): void {
      //this.products = this.productService.getProducts();
  }
  
}
