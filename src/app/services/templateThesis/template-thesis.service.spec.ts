import { TestBed } from '@angular/core/testing';

import { TemplateThesisService } from './template-thesis.service';

describe('TemplateThesisService', () => {
  let service: TemplateThesisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TemplateThesisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
