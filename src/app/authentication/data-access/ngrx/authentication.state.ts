import { User } from '@angular/fire/auth';

export const AUTHENTICATION_STATE = 'Authentication';

export interface AuthenticationState {
  isLoggedIn: boolean;
  currentUser: User | null;
}
