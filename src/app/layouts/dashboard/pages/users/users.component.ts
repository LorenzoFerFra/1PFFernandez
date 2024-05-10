import { Component, OnInit } from '@angular/core';
import { IUser } from './models/index';
import { MatDialog } from '@angular/material/dialog';
import { UsersDialogComponent } from './components/users-dialog/users-dialog.component';
import Swal from 'sweetalert2';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'weight', 'lastName', 'email', 'role', 'createdAt','actions'];
  usuarios: IUser[] = [];
  isLoading = false;
  // userRoleSession =  'ADMIN' 

  constructor(private matDialog: MatDialog, private usersService: UsersService ) {}
  ngOnInit(): void {
    this.isLoading = true;
    this.usersService.getUsers().subscribe({
      next: (users) => {
        console.log('next', users)
        this.usuarios = users;
      },
      error: (err) => {
        console.log('error', err)
        // Cambiar error segun codigo hhtps
        Swal.fire('Error', 'Ocurrio un error al cargar los usuarios', 'error');
      },
      complete: () => {
        console.log('complete', )
        this.isLoading = false;
      }
    })
  }
  openDialog(editUser?: IUser): void {
    this.matDialog
    .open(UsersDialogComponent, {
      data: editUser,
    })
    .afterClosed()
    .subscribe({
      next: (result) => {

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
