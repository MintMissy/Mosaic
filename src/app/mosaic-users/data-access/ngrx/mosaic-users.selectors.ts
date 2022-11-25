import { MOSAIC_USERS_STATE, MosaicUsersState } from './mosaic-users.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

const mosaicUsers = createFeatureSelector<MosaicUsersState>(MOSAIC_USERS_STATE);

export const selectUser = (id: string) => {
  createSelector(mosaicUsers, (state) => {
    return Object.values(state.users).find((user) => user.uid === id);
  });
};
