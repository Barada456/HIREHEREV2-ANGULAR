import { TestBed } from '@angular/core/testing';

import { PMService } from './pm.service';

describe('PMService', () => {
  let service: PMService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PMService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
