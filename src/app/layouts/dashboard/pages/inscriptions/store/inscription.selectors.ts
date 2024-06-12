import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromInscription from './inscription.reducer';

export const selectInscriptionState = createFeatureSelector<fromInscription.State>(
  fromInscription.inscriptionFeatureKey
);

export const selectIsLoading = createSelector(selectInscriptionState, (state) => {
  return state.isLoading;
});

export const selectInscriptions = createSelector(
  selectInscriptionState,
  (state) => state.inscriptions
);

export const selectInscriptionError = createSelector(selectInscriptionState, (s) => s.error);

