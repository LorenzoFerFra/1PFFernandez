import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassesRoutingModule } from './classes-routing.module';
import { ClassesComponent } from './classes.component';
import { SharedModule } from '../../../../shared/shared.module';
import { ClassDialogComponent } from './components/class-dialog/class-dialog.component';


@NgModule({
  declarations: [
    ClassesComponent,
    ClassDialogComponent
  ],
  imports: [
    CommonModule,
    ClassesRoutingModule,
    SharedModule,
  ]
})
export class ClassesModule { }
