import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscriptionsComponent } from './inscriptions.component';

const routes: Routes = [
  {
    // path actual: http://localhost:6900/dashboard/inscriptions ->
    path: '',
    component: InscriptionsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InscriptionsRoutingModule { }
