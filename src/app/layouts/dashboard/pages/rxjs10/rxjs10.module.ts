import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Rxjs10Component } from './rxjs10.component';
import { SharedModule } from '../../../../shared/shared.module';



@NgModule({
  declarations: [
    Rxjs10Component
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    Rxjs10Component
  ],
})
export class Rxjs10Module { }
