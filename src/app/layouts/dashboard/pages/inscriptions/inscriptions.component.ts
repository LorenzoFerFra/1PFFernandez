import { Component, OnInit } from '@angular/core';
import { InscriptionService } from './inscriptions.service';
import { IInscription, IInscriptionsForm } from './models';
import { AuthService } from '../../../../core/services/auth.service';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { InscriptionActions } from './store/inscription.actions';
import {
  selectInscriptionState,
  selectIsLoading,
  selectInscriptions,
  selectInscriptionError,
} from './store/inscription.selectors';
import { FormControl, FormGroup } from '@angular/forms';
import { IStudent } from '../students/models';
import { ICurso } from '../cursos/models';
import { IUser } from '../users/models';
import { StudentActions } from '../students/store/student.actions';
import { selectStudentList } from '../students/store/student.selectors';

@Component({
  selector: 'app-inscriptions',
  templateUrl: './inscriptions.component.html',
})
export class InscriptionsComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'userId',
    'studentId',
    'cursoId',
    'inscriptedAt',
    'actions',
  ];
  inscriptions: IInscription[] = [];
  inscriptions$: Observable<IInscription[]>;
  cursos: ICurso[] = [];
  students: IStudent[] = [];
  error$: Observable<Error>;
  isLoading$: Observable<boolean>;
  currentUser$: Observable<IUser | null>;
  //students$: Observable<IStudent[]>;

  inscriptionsForm = new FormGroup<IInscriptionsForm>({
    userId: new FormControl(null),
    studentId: new FormControl(null),
    cursoId: new FormControl(null),
    inscriptedAt: new FormControl(null),
  });
  constructor(
    private store: Store,
    private inscriptionService: InscriptionService,
    private authServ: AuthService
  ) {
    this.currentUser$ = this.authServ.authUser$;
    // Usar el selector para manejar el estado de carga de la pagina
    this.isLoading$ = this.store.select(selectIsLoading);
    // Obtener las inscripciones observables
    this.inscriptions$ = this.store.select(selectInscriptions);
    // catch error
    this.error$ = this.store.select(selectInscriptionError).pipe(map((err) => err as Error));
  }

  ngOnInit(): void {
    this.store.dispatch(InscriptionActions.loadInscriptions());
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
  delInscription(arg0: any) {
    throw new Error('Method not implemented.');
  }
  openDialog(_t95: any) {
    throw new Error('Method not implemented.');
  }

  createInscription(): void {
    // this.store.dispatch(InscriptionActions.createInscription());

  }
}
  


