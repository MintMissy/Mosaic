import { TestBed } from '@angular/core/testing';

import { MosaicUserResourceService } from './mosaic-user-resource.service';

describe('MosaicUserResourceService', () => {
  let service: MosaicUserResourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MosaicUserResourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
