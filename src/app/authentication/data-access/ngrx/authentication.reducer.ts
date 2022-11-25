import { AuthenticationState } from './authentication.state';
import { createReducer } from '@ngrx/store';

const initialAuthenticationState: AuthenticationState = {
  isLoggedIn: false,
};

export const authenticationReducer = createReducer(initialAuthenticationState);
