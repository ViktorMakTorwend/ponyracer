import { TestBed } from '@angular/core/testing';

import { HTTPUserService } from './HTTP-user.service';

describe('HTTPUserService', () => {
  let service: HTTPUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HTTPUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
