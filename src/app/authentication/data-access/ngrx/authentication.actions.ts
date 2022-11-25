import { createActionGroup, emptyProps, props } from '@ngrx/store';

import { LoginPayload } from '../../model/login-payload.model';
import { User } from '@angular/fire/auth';

export const AuthenticationActions = createActionGroup({
  source: 'Authentication',
  events: {
    Login: props<{ payload: LoginPayload }>(),
    'Login Success': props<{ response: User }>(),
    'Login Failure': props<{ error: string }>(),
    'Sign Up': props<{ payload: LoginPayload }>(),
    'Sign Up Success': props<{ user: User }>(),
    'Sign Up Failure': props<{ error: string }>(),
    Logout: emptyProps(),
  },
});
