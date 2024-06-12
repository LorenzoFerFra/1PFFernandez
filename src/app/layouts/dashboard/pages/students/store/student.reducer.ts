import { createFeature, createReducer, on } from '@ngrx/store';
import { StudentActions } from './student.actions';
import { IStudent } from '../models';

export const studentFeatureKey = 'student';

export interface State {
  loadingStudents : boolean;
  students: IStudent[];
  error: unknown;
}


export const initialState: State = {
  loadingStudents: false,
  students: [],
  error: null,
};

export const reducer = createReducer(
  initialState,
  //al disparar, dejar cargando mientras se espera la promesa
  on(StudentActions.loadStudents, state => ({...state, 
    loadingStudents: true,
  })),
  //La promesa finalizo exitosmaente, se carga la accion de tipo iStudent
  on(StudentActions.loadStudentsSuccess, (state, action) => {
    return {
      ...state,
      loadingStudents: false,
      students: action.data,
    };
  }),
   //Catch error
  on(StudentActions.loadStudentsFailure, (state, action) => {
    return {
      ...state,
      error: action.error,
      loadingStudents: false,
    };
  })
);



export const studentFeature = createFeature({
  name: studentFeatureKey,
  reducer,
});

