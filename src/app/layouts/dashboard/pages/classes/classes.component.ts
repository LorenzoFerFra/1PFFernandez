import { Component, OnInit } from '@angular/core';
import { ClassesService } from './classes.service';
import { IClass, IClasssForm } from './models';
import Swal from 'sweetalert2';
import { FormControl, FormGroup } from '@angular/forms';
import { UsersService } from '../users/users.service';
import { IUser } from '../users/models';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrl: './classes.component.scss'
})
export class ClassesComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'students','actions'];

  classes: IClass[] = [];
  students: IUser[] = [];
  isLoading = false;
  // unsavedChanges = false;

  classesForm = new FormGroup<IClasssForm>({
    name: new FormControl(null),
    students: new FormControl(null),
  });

  constructor(private classesService: ClassesService, private usersService: UsersService){

  }
  ngOnInit(): void {
    this.isLoading = true;
    this.loadClasses();
    this.loadUsers();
  }
  //
  // subscribeToSaleFormChange(): void {
  //   this.classesForm.valueChanges.subscribe({
  //     next: (v) => {
  //       console.log('asdasd ')
  //       this.unsavedChanges = true;
  //     },
  //   });
  // }
  loadUsers(){
    this.usersService.getUsers().subscribe({
      next: (users) => {
        console.log('next', users)
        this.students = users;
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
  loadClasses () {
    this.classesService.getClasses().subscribe({
      next:(classesServ) => {
        this.classes = classesServ;
      },
      error:(err) => {},
      complete:() => {
        this.isLoading = false;
      },
    })
  }
  createClasss () {
    this.classesService.createClass(this.classesForm.getRawValue()).subscribe({
      next: (c) => {
        console.log(c);
      }
    });
  }
  delClass(classId: number): void{
    if(confirm('desea borrar esta clase?'))
    this.classes = this.classes.filter((i) => i.id != classId)
    Swal.fire({
      icon: 'success',
      title: 'Borrado',
      text: 'Clase borrado exitosamente',
    });
  }
}
