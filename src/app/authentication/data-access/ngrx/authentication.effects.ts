import { Actions } from '@ngrx/effects';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticationEffects {
  constructor(private actions$: Actions) {}

  // actionName$ = this.actions$.pipe(ofType(class.actionName));
}
