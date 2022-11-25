import { MosaicUser, MosaicUserDto } from '../../model/mosaic-user.model';
import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const MosaicUsersActions = createActionGroup({
  source: 'Mosaic Users',
  events: {
    'Load User': props<{ id: string }>(),
    'Load User Success': props<{ user: MosaicUser }>(),
    'Load User Failure': props<{ error: string }>(),
    'Load All Users': emptyProps(),
    'Load All Users Success': props<{ users: MosaicUser[] }>(),
    'Load All Users Failure': props<{ error: string }>(),
    'Add User': props<{ user: MosaicUserDto }>(),
    'Add User Success': props<{ user: MosaicUser }>(),
    'Add User Failure': props<{ error: string }>(),
    'Edit User': props<{ user: MosaicUser }>(),
    'Edit User Success': props<{ user: MosaicUser }>(),
    'Edit User Failure': props<{ error: string }>(),
  },
});
