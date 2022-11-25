import { AUTHENTICATION_STATE, AuthenticationState } from './authentication.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

const authentication = createFeatureSelector<AuthenticationState>(AUTHENTICATION_STATE);

export const selectAuthenticationState = createSelector(
  authentication,
  (state: AuthenticationState) => state.isLoggedIn
);
