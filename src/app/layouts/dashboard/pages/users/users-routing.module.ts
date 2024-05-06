import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';
import { UserDetailComponent } from './pages/user-detail/user-detail.component';

const routes: Routes = [
   // path actual: http://localhost:6900/dashboard/users...
  {
    path: '',
    component: UsersComponent,
    // loadChildren: () => 
    // import('./components/users-dialog').then((m) => m.HomeModule),
  },
  {
    path: ':id',
    component: UserDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
