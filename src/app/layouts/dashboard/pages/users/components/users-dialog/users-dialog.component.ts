import { Component, Inject} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { IUser } from '../../models';

@Component({
  selector: 'app-users-dialog',
  templateUrl: './users-dialog.component.html',
  styleUrl: './users-dialog.component.scss'
})
export class UsersDialogComponent {
  usuariosForm: FormGroup;
  
  constructor(private fb: FormBuilder, private matDialogRef: MatDialogRef<UsersDialogComponent>){
    console.log("constructor")
    this.usuariosForm = this.fb.group({
      name: ['', [
        Validators.required,
        Validators.pattern('^[a-zA-ZÁÉÍÓÚáéíóúñÑ]+$'),
        Validators.minLength(6),
        Validators.maxLength(14),
      ]], 
      weight: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      email: ['', [ Validators.required,Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}'),]],
      role: ['USER',[Validators.required]],


    })
  }
  guardarUsuario(): void{
    if(this.usuariosForm.invalid){
      this.usuariosForm.markAllAsTouched();
    }
    else{
      this.matDialogRef.close(this.usuariosForm.value);
      Swal.fire({
        icon: 'success',
        title: 'listo',
        text: 'Usuario agregado exitosamente',
      });
    }

  }
}
