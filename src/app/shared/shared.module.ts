import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import { FormFieldValidationErrorsPipe } from './pipes/form-field-validation-errors.pipe';
import { ResaltadoDirective } from './directives/resaltado.directive';
import { RepetirDirective } from './directives/repetir.directive';
import { CabeceraDirective } from './directives/cabecera.directive';
import { ConcatenarNombresPipe } from './pipes/concatenar-nombres.pipe';



@NgModule({
  declarations: [
    FormFieldValidationErrorsPipe,
    ResaltadoDirective,
    RepetirDirective,
    CabeceraDirective,
    ConcatenarNombresPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MatTableModule, MatButtonModule, MatDialogModule, MatFormFieldModule, MatInputModule, FormsModule, 
    ReactiveFormsModule,MatSelectModule,MatIconModule,FormFieldValidationErrorsPipe,ResaltadoDirective, RepetirDirective,
    CabeceraDirective, ConcatenarNombresPipe
  ],
})
export class SharedModule { }

