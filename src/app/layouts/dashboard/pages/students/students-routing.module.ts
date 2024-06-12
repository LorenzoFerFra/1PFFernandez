import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './students.component';
import { adminGuard } from '../../../../core/guards/admin.guard';

const routes: Routes = [
  {
    // /dashboard/students
    path: '',
    component: StudentsComponent,
  },
  // {
  //   path: 'delete',
  //   canActivate: [adminGuard]
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
