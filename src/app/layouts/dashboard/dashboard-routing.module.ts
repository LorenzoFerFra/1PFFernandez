import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [ {
  // path actual: http://localhost:6900/dashboard
  path: '',
  // component: DashboardComponent, //el profe dijo que convenia declararlo en el appmodulo
  children: [
    {
      path: 'home',
      loadChildren: () => 
      import('./pages/home/home.module').then((m) => m.HomeModule),
    },
    {
      path: 'users',
      loadChildren: () => 
      import('./pages/users/users.module').then((m) => m.UsersModule),
    },
    {
      path: 'products',
      loadChildren: () => 
      import('./pages/products/products.module').then((m) => m.ProductsModule),
    },
    {
      path: '',
      pathMatch: 'full',
      redirectTo: 'home',
    },
  ]
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
