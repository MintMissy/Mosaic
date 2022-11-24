import { TestBed } from '@angular/core/testing';

import { MosaicResourceService } from './mosaic-resource.service';

describe('MosaicResourceService', () => {
  let service: MosaicResourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MosaicResourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
