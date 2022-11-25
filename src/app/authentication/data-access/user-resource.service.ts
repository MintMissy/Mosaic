import { AuthenticationModule } from '../authentication.module';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: AuthenticationModule,
})
export class UserResourceService {
  constructor() {}
}
