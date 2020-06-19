import { TestBed } from '@angular/core/testing';

import { InputCounterService } from './input-counter.service';

describe('InputCounterService', () => {
  let service: InputCounterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InputCounterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
