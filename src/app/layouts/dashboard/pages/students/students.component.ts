import { Component } from '@angular/core';
import { IStudent, IStudentForm } from './models/index';
import { StudentsService } from './students.service';
import { FormControl, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';
import { Store } from '@ngrx/store';
import { StudentActions } from './store/student.actions';
import {
  selectStudentList,
  selectStudentsError,
  selectLoadingStudents,
} from './store/student.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
})
export class StudentsComponent {
  openDialog(_t97: any) {
    throw new Error('Method not implemented.');
  }
  displayedColumns: string[] = ['id', 'name', 'sex', 'prof', 'actions'];
  students: IStudent[] = [];
  loadingStudents$: Observable<boolean>;
  students$: Observable<IStudent[]>;
  error$: Observable<unknown>;

  studentsForm = new FormGroup<IStudentForm>({
    name: new FormControl(null),
    lastName: new FormControl(null),
    sex: new FormControl(null),
    prof: new FormControl(null),
  });
  constructor(private store: Store, private studentsService: StudentsService) {
    this.loadingStudents$ = this.store.select(selectLoadingStudents);
    this.error$ = this.store.select(selectStudentsError);
    this.students$ = this.store.select(selectStudentList);
  }
  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents() {
    this.store.dispatch(StudentActions.loadStudents());
    this.store.select(selectStudentList).subscribe({
      next: (students) => {
        this.students = students;
      },
    });
  }

  delStudent(studentId: string): void {
    if (confirm('desea borrar este alumno?')) {
      this.students = this.students.filter((i) => i.id != studentId);
      Swal.fire({
        icon: 'success',
        title: 'Borrado',
        text: 'Alumno borrada exitosamente',
      });
    }
  }
}
