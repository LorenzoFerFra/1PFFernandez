import { Component } from '@angular/core';
import { IUser } from './models/index';
import { MatDialog } from '@angular/material/dialog';
import { UsersDialogComponent } from './components/users-dialog/users-dialog.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent {
  displayedColumns: string[] = ['id', 'name', 'weight', 'email', 'role', 'createdAt','actions'];
  usuarios: IUser[] = [
    {
      id: 1,
      name: 'mario',
      weight: 100,
      email: 'mariomario@gmail.com',
      role: 'USER',
      createdAt: new Date(),
    },
    {
      id: 2,
      name: 'luigi',
      weight: 98,
      email: 'luigimario@gmail.com',
      role: 'ADMIN',
      createdAt: new Date(),
    },
  ];
  // userRoleSession =  'ADMIN'

  constructor(private matDialog: MatDialog) {}

  openDialog(editUser?: IUser): void {
    this.matDialog
    .open(UsersDialogComponent, {
      data: editUser,
    })
    .afterClosed()
    .subscribe({
      next: (result) => {
        console.log(result);
        if (result){
          if(editUser){
            this.usuarios = this.usuarios.map((i) => i.id === editUser.id ? {...i, ...result} : i)
          }
          else{
            result.id = new Date().getTime().toString().substring(0, 3);
            result.createdAt = new Date();
            this.usuarios = [...this.usuarios, result]
          }
        }
      },
    })
  }
  delUser(userId: number): void{
    if(confirm('desea borrar este usuario?'))
    this.usuarios = this.usuarios.filter((i) => i.id != userId)
    Swal.fire({
      icon: 'success',
      title: 'Borrado',
      text: 'Usuario borrado exitosamente',
    });
  }
  edUser(userId: number): void{

  }
}
