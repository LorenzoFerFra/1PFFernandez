import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxjsComponent } from './rxjs.component';
import { SharedModule } from '../../../../shared/shared.module';



@NgModule({
  declarations: [
    RxjsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    RxjsComponent
  ]
})
export class RxjsModule { }
