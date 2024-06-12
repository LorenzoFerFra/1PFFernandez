import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromStudent from './student.reducer';

export const selectStudentState = createFeatureSelector<fromStudent.State>(
  fromStudent.studentFeatureKey
);

export const selectStudentList = createSelector(selectStudentState, (s) => s.students);

export const selectLoadingStudents = createSelector(
  selectStudentState,
  (state) => state.loadingStudents
);

export const selectStudentsError = createSelector(selectStudentState, (s) => s.error);
