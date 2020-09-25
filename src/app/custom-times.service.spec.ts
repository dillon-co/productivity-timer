import { TestBed } from '@angular/core/testing';

import { CustomTimesService } from './custom-times.service';

describe('CustomTimesService', () => {
  let service: CustomTimesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomTimesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
