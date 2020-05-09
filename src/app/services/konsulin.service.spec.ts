import { TestBed } from '@angular/core/testing';

import { KonsulinService } from './konsulin.service';

describe('KonsulinService', () => {
  let service: KonsulinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KonsulinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
