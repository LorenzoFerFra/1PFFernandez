import { Component, OnInit  } from '@angular/core';
import { CursosService } from './cursos.service';
import { ICurso, ICursoForm } from './models';
import Swal from 'sweetalert2';
import { FormControl, FormGroup } from '@angular/forms';
import { UsersService } from '../users/users.service';
import { IUser } from '../users/models';
import { Store } from '@ngrx/store';
import { CursoActions } from './store/curso.actions';
import { selectCursoList, selectCursosError, selectLoadingCursos } from './store/curso.selectors';
import { Observable } from 'rxjs';

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
    students: IUser[] = [];
    error$: Observable<unknown>;
    loadingCursos$: Observable<boolean>;
  
    cursosForm = new FormGroup<ICursoForm>({
      name: new FormControl(null),
      students: new FormControl(null),
    });
  
    constructor(private store: Store, private cursosService: CursosService, private usersService: UsersService){
      this.loadingCursos$ = this.store.select(selectLoadingCursos);
      this.error$ = this.store.select(selectCursosError);
    }
    ngOnInit(): void {
      this.loadCursos();
      this.loadUsers();
    }
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
        }
      })
    }
    loadCursos () {

      this.store.dispatch(CursoActions.loadCursos());
      
      this.store.select(selectCursoList).subscribe({
        next: (cursos) => {
          this.cursos = cursos;
        }
      })
    }
    // createCurso() {
    //   this.cursosService.createCurso(this.cursosForm.value).subscribe({
    //     next: (curso) => {
    //       console.log(curso);
    //     },
    //   });
    // }
    delCurso(cursoId: number): void{
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
  
