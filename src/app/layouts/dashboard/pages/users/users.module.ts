import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import { UsersDialogComponent } from './components/users-dialog/users-dialog.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    UsersComponent,
    UsersDialogComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MatTableModule,
    MatDialogModule,
    MatButtonModule,
  ],
  exports: [
    UsersComponent
  ],
})
export class UsersModule { }
