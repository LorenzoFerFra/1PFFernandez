import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCurso from './curso.reducer';

export const selectCursoState = createFeatureSelector<fromCurso.State>(
  fromCurso.cursoFeatureKey
);


export const selectCursoList = createSelector(selectCursoState, (c) => c.cursos);

export const selectLoadingCursos = createSelector(
  selectCursoState,
  (state) => state.loadingCursos
);

export const selectCursosError = createSelector(selectCursoState, (s) => s.error);
