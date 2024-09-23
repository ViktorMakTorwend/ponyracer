import { TestBed } from '@angular/core/testing';

import { LoggingAPIService } from './logging-api.service';

describe('LoggingAPIService', () => {
  let service: LoggingAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoggingAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
