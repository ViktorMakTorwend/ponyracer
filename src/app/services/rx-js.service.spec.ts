import { TestBed } from '@angular/core/testing';

import { RxJsService } from './rx-js.service';

describe('RxJsService', () => {
  let service: RxJsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RxJsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
