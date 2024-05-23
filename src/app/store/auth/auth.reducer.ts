import { createReducer, on } from '@ngrx/store';
import { IUser } from '../../layouts/dashboard/pages/users/models';
import { authActions } from './auth.actions';
import Swal from 'sweetalert2';

export interface AuthState {
  authUser: null | IUser;
}

const initialState: AuthState = {
  authUser: null,
};

const MOCK_AUTH_USER: IUser = {
  id: 1,
  name: 'Admin',
  weight: 98,
  lastName: 'mario',
  email: 'lorenzo@gmail.com',
  role: 'ADMIN',
  createdAt: new Date(),
};

export const authFeatureName = 'auth';

export const authReducer = createReducer(
  initialState,
  on(authActions.login, (state, action) => {
    // Si el usuario y o contraseña es incorrecto, tira un swalert
    if (
      action.payload.email !== 'lorenzo@gmail.com' ||
      action.payload.password !== '123'
    ) {
      Swal.fire({
        icon: 'error',
        title: 'Fallo al loguear',
        text: 'Email o password incorrecto/s',
      });
      return state;
      // Si el usuario esta bien, loguea
    } else {
      
      localStorage.setItem(
        'accessToken',
        'linea de caracteres x'
      );
      return {
        authUser: MOCK_AUTH_USER,
      };
    }
  }),

  on(authActions.logout, () => {
    localStorage.removeItem('accessToken');
    return initialState;
  })
);
