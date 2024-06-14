import { createFeature, createReducer, on } from '@ngrx/store';
import { InscriptionActions } from './inscription.actions';
import { IInscription } from '../models';

export const inscriptionFeatureKey = 'inscription';

export interface State {
  inscriptions: IInscription[];
  isLoading : boolean;
  error: unknown;
}

export const initialState: State = {
  inscriptions: [],
  isLoading : false,
  error: null,
};

// Cargar inscripciones de db
export const reducer = createReducer(
  initialState,
  // al cargar se cambia el estado de carga
  on(InscriptionActions.loadInscriptions, (state) => {
    return {
      ...state,
      isLoading: true,
    }
  }),
  //inscripciones cargadas exitosamente
  on(InscriptionActions.loadInscriptionsSuccess, (state, action) => {
    return {
      ...state,
      isLoading: false,
      inscriptions: action.data
    }
  }),
  //en caso de error
  on(InscriptionActions.loadInscriptionsFailure, (state, action) => {
    return {
      ...state,
      isLoading: false,
      error: action.error,
    };
  }),
);

export const inscriptionFeature = createFeature({
  name: inscriptionFeatureKey,
  reducer,
});

