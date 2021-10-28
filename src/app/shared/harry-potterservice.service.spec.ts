import { TestBed } from '@angular/core/testing';

import { HarryPotterserviceService } from './harry-potterservice.service';

describe('HarryPotterserviceService', () => {
  let service: HarryPotterserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HarryPotterserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
