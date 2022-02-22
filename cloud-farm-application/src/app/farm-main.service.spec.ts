import { TestBed } from '@angular/core/testing';

import { FarmMainService } from './farm-main.service';

describe('FarmMainService', () => {
  let service: FarmMainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FarmMainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
