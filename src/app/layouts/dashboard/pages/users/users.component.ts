import { Component } from '@angular/core';
import { IUser } from './models/index';
import { MatDialog } from '@angular/material/dialog';
import { UsersDialogComponent } from './components/users-dialog/users-dialog.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent {
  displayedColumns: string[] = ['id', 'name', 'weight', 'email', 'createdAt'];
  usuarios: IUser[] = [
    {
      id: 1,
      name: 'mario',
      weight: 100,
      email: 'mariomario@gmail.com',
      createdAt: new Date(),
    },
    {
      id: 2,
      name: 'luigi',
      weight: 98,
      email: 'luigimario@gmail.com',
      createdAt: new Date(),
    },
  ];
  constructor(private matDialog: MatDialog) {}

  openDialog(): void {
    this.matDialog
    .open(UsersDialogComponent)
    .afterClosed()
    .subscribe({
      next: (result) => {
        console.log(result);
        if (result){
          this.usuarios = [...this.usuarios, result]
        }
      },
    })
  }
}
