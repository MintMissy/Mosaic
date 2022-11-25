import { User } from '@angular/fire/auth';

export const MOSAIC_USERS_STATE = 'Mosaic Users';

export interface MosaicUsersState {
  users: { [id: string]: User };
}
