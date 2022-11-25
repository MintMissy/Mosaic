import { CommonModule } from '@angular/common';
import { MOSAIC_USERS_STATE } from './data-access/ngrx/mosaic-users.state';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { UserCommentComponent } from './ui/user-comment/user-comment.component';
import { UserProfileComponent } from './feature/user-profile/user-profile.component';
import { mosaicUsersReducer } from './data-access/ngrx/mosaic-users.reducer';

@NgModule({
  declarations: [UserProfileComponent, UserCommentComponent],
  imports: [CommonModule, StoreModule.forFeature(MOSAIC_USERS_STATE, mosaicUsersReducer)],
  exports: [],
  providers: [],
})
export class MosaicUsersModule {}
