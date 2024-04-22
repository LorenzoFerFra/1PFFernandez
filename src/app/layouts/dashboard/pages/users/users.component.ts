import { Component } from '@angular/core';
import { IUser } from './models/index';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  displayedColumns: string[] = ['id', 'name', 'weight', 'email', 'createdAt' ];
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
  ]
}
