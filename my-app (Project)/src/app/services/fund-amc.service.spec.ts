import { TestBed } from '@angular/core/testing';

import { FundAmcService } from './fund-amc.service';

describe('FundAmcService', () => {
  let service: FundAmcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FundAmcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
