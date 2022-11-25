import { MosaicUsersState } from './mosaic-users.state';
import { createReducer } from '@ngrx/store';

const initialMosaicUsersState: MosaicUsersState = {
  users: {},
};

export const mosaicUsersReducer = createReducer(initialMosaicUsersState);
