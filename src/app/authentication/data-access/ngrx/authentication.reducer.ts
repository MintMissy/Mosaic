import { AuthenticationState } from './authentication.state';
import { createReducer } from '@ngrx/store';

const initialAuthenticationState: AuthenticationState = {
  isLoggedIn: false,
  currentUser: null,
};

export const authenticationReducer = createReducer(initialAuthenticationState);
