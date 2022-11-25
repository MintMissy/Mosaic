import { Adapter } from 'src/app/core/interfaces/adapter';
import { MosaicUser } from '../model/mosaic-user.model';

export class MosaicUserAdapter implements Adapter<MosaicUser> {
  // TODO implement adapt method
  adapt(item: any): MosaicUser {
    throw new Error('Method not implemented.');
  }
}
