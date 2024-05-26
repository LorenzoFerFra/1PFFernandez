import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { UsersModule } from './pages/users/users.module';
import { SharedModule } from '../../shared/shared.module';
import { PipesModule } from './pages/pipes/pipes.module';
import {MatListModule} from '@angular/material/list';
import { RxjsModule } from './pages/rxjs/rxjs.module';
import { Rxjs10Module } from './pages/rxjs10/rxjs10.module';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    UsersModule,
    SharedModule,
    PipesModule,
    MatListModule,
    RxjsModule,
    Rxjs10Module
  ],
  exports: [
    DashboardComponent
  ],
})
export class DashboardModule { }
