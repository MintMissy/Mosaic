import { AUTHENTICATION_STATE } from './data-access/ngrx/authentication.state';
import { AuthenticationDialogComponent } from './feature/authentication-dialog/authentication-dialog.component';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './feature/login-form/login-form.component';
import { NgModule } from '@angular/core';
import { SignUpFormComponent } from './feature/sign-up-form/sign-up-form.component';
import { StoreModule } from '@ngrx/store';
import { authenticationReducer } from './data-access/ngrx/authentication.reducer';

@NgModule({
  declarations: [LoginFormComponent, SignUpFormComponent, AuthenticationDialogComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(AUTHENTICATION_STATE, authenticationReducer),
    // EffectsModule.forFeature([AuthenticationEffects]),
  ],
})
export class AuthenticationModule {}
