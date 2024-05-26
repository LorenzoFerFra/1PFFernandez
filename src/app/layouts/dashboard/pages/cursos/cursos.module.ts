import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { CursosComponent } from './cursos.component';
import { EffectsModule } from '@ngrx/effects';
import { CursoEffects } from './store/curso.effects';
import { StoreModule } from '@ngrx/store';
import { cursoFeature } from './store/curso.reducer';
import { SharedModule } from '../../../../shared/shared.module';

@NgModule({
  declarations: [
    CursosComponent,
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    SharedModule,
    StoreModule.forFeature(cursoFeature),
    EffectsModule.forFeature([CursoEffects])
  ]
})
export class CursosModule { }
