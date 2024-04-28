import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipesRoutingModule } from './pipes-routing.module';
import { PipesComponent } from './pipes.component';
import { CustomText1Pipe } from './custom-text-1.pipe';
import { SharedModule } from '../../../../shared/shared.module';


@NgModule({
  declarations: [
    PipesComponent,
    CustomText1Pipe
  ],
  imports: [
    CommonModule,
    PipesRoutingModule,
    SharedModule,
  ],
  exports: [PipesComponent],
})
export class PipesModule { }
