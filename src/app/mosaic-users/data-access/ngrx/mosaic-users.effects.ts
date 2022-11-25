import { Actions, createEffect, ofType } from '@ngrx/effects';

import { Injectable } from '@angular/core';
import { MosaicUserResourceService } from '../mosaic-user-resource.service';

@Injectable({
    providedIn: 
})
export class NameEffects {
    constructor(private actions$: Actions, private userService: MosaicUserResourceService ) {}

    // actionName$ = this.actions$.pipe(ofType(class.actionName));

}