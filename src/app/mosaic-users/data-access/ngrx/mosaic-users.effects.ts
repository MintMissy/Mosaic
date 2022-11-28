import { Actions } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { MosaicUserResourceService } from '../mosaic-user-resource.service';
import { MosaicUsersModule } from '../../mosaic-users.module';

@Injectable({
  providedIn: MosaicUsersModule,
})
export class MosaicUsersEffect {
  constructor(private actions$: Actions, private userService: MosaicUserResourceService) {}

  // actionName$ = this.actions$.pipe(ofType(class.actionName));
}
