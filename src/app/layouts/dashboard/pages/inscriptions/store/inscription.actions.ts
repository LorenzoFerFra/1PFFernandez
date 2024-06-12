import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { IInscription, IInscriptionsPayload } from '../models';
import { HttpErrorResponse } from '@angular/common/http';

export const InscriptionActions = createActionGroup({
  source: 'Inscription',
  events: {
    //cargar la db de las inscripciones
    'Load Inscriptions': emptyProps(),
    'Load Inscriptions Success': props<{ data: IInscription[] }>(),
    'Load Inscriptions Failure': props<{ error: unknown }>(),

    //crear una inscripcion
    'Create inscription': props<{ payload: IInscriptionsPayload }>(),
    'Create inscription Success': props<{ data: IInscription }>(),
    'Create inscription Failure': props<{ error: unknown }>(),

    //borrar una inscripcion especifica
    'Delete inscription By Id': props<{ id: string }>(),
    'Delete inscription By Id Success': props<{ data: IInscription }>(),
    'Delete inscription By Id Failure': props<{ error: HttpErrorResponse }>(),
  }
});
