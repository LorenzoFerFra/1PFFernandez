import { Component, OnDestroy, OnInit  } from '@angular/core';
import { CursosService } from './cursos.service';
import { ICurso, ICursoForm } from './models';
import Swal from 'sweetalert2';
import { FormControl, FormGroup } from '@angular/forms';
import { UsersService } from '../users/users.service';
import { IUser } from '../users/models';
import { IStudent } from '../students/models';
import { StudentsService } from '../students/students.service';
import { Store } from '@ngrx/store';
import { CursoActions } from './store/curso.actions';
import { selectCursoList, selectCursosError, selectLoadingCursos } from './store/curso.selectors';
import { Observable} from 'rxjs';
import { selectStudentList } from '../students/store/student.selectors';
import { StudentActions } from '../students/store/student.actions';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.scss'
})
export class CursosComponent implements OnInit {
  openDialog(_t88: any) {
  throw new Error('Method not implemented.');
  }
  
    displayedColumns: string[] = ['id', 'name', 'profesor' , 'inscription', 'actions'];
    cursos: ICurso[] = [];
    users: IUser[] = [];
    students: IStudent[] = [];
    students$: Observable<IStudent[]>;

    error$: Observable<unknown>;
    loadingCursos$: Observable<boolean>;
    cursos$: Observable<ICurso[]>;
  
    cursosForm = new FormGroup<ICursoForm>({
      name: new FormControl(null),
      students: new FormControl(null),
    });
  
    constructor(private store: Store, private cursosService: CursosService, private usersService: UsersService, private studentsService: StudentsService){
      this.loadingCursos$ = this.store.select(selectLoadingCursos);
      this.error$ = this.store.select(selectCursosError);
      this.cursos$ = this.store.select(selectCursoList)
      this.students$ = this.store.select(selectStudentList);
    }

    ngOnInit(): void {
      this.loadCursos();
      this.loadUsers();

    }

    //
    loadUsers(){
      this.usersService.getUsers().subscribe({
        next: (users) => {
          this.users = users;
        },
        error: (err) => {
          // Cambiar error segun codigo hhtps
          Swal.fire('Error', 'Ocurrio un error al cargar los usuarios', 'error');
        },
        complete: () => {
        }
      })
    }
    loadStudents() {
      this.store.dispatch(StudentActions.loadStudents());
      this.store.select(selectStudentList).subscribe({
        next: (students) => {
          this.students = students;
        },
      });
    }
    loadCursos () {
      this.store.dispatch(CursoActions.loadCursos());
      this.store.select(selectCursoList).subscribe({
        next: (cursos) => {
          this.cursos = cursos;
        }
      })
    }

    delCurso(cursoId: string): void{
      if(confirm('desea borrar esta clase?')){
        this.cursos = this.cursos.filter((i) => i.id != cursoId)
        Swal.fire({
          icon: 'success',
          title: 'Borrado',
          text: 'Clase borrada exitosamente',
        });
      }
      }
  }
  
