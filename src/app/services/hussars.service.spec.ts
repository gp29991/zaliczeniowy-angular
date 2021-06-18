import { TestBed } from '@angular/core/testing';

import { HussarsService } from './hussars.service';

describe('HussarsService', () => {
  let service: HussarsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HussarsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
