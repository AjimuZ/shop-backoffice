import { TestBed } from '@angular/core/testing';

import { ErrorPropagationService } from './error-propagation.service';

describe('ErrorPropagationService', () => {
  let service: ErrorPropagationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErrorPropagationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
