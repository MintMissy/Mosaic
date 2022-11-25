import { Actions } from '@ngrx/effects';
import { AuthenticationModule } from 'src/app/authentication/authentication.module';
import { AuthenticationService } from '../authentication.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: AuthenticationModule,
})
export class AuthenticationEffects {
  constructor(private actions$: Actions, private authenticationService: AuthenticationService) {}

  // actionName$ = this.actions$.pipe(ofType(class.actionName));
}
