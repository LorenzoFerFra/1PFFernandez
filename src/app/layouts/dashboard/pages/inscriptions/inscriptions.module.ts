import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InscriptionsRoutingModule } from './inscriptions-routing.module';
import { InscriptionsComponent } from './inscriptions.component';
import { EffectsModule } from '@ngrx/effects';
import { InscriptionEffects } from './store/inscription.effects';
import { SharedModule } from '../../../../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { inscriptionFeature } from './store/inscription.reducer';


@NgModule({
  declarations: [
    InscriptionsComponent
  ],
  imports: [
    CommonModule,
    InscriptionsRoutingModule,
    SharedModule,
    StoreModule.forFeature(inscriptionFeature),
    EffectsModule.forFeature([InscriptionEffects])
  ]
})
export class InscriptionsModule {
  displayedColumns = ['id', 'name', 'actions'];
 }
