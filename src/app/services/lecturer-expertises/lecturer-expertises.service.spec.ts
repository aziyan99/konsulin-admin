import { TestBed } from '@angular/core/testing';

import { LecturerExpertisesService } from './lecturer-expertises.service';

describe('LecturerExpertisesService', () => {
  let service: LecturerExpertisesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LecturerExpertisesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
