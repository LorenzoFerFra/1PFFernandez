import { createFeature, createReducer, on } from '@ngrx/store';
import { CursoActions } from './curso.actions';
import { ICurso } from '../models';
import { IUser, UserRole } from "../../users/models";

export const cursoFeatureKey = 'curso';

export interface State {
  loadingCursos : boolean;
  cursos: ICurso[];
  error: unknown;
}

export const initialState: State = {
  loadingCursos: false,
  cursos: [],
  error: null,
};

export const reducer = createReducer(
  initialState,
  //al disparar, dejar cargando mientras se espera la promesa
  on(CursoActions.loadCursos, state => ({...state, 
    loadingCursos: true,
  })),
  //La promesa finalizo exitosmaente, se carga la accion de tipo iCurso
  on(CursoActions.loadCursosSuccess, (state, action) => {
    return {
      ...state,
      cursos: action.data,
      loadingCursos: false,
    };
  }),
   //Catch error
  on(CursoActions.loadCursosFailure, (state, action) => {
    return {
      ...state,
      error: action.error,
      loadingCursos: false,
    };
  })
);




export const cursoFeature = createFeature({
  name: cursoFeatureKey,
  reducer,
});

