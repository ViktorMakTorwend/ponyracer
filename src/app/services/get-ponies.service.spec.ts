import { TestBed } from '@angular/core/testing';

import { GetPoniesService } from './get-ponies.service';

describe('GetPoniesService', () => {
  let service: GetPoniesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetPoniesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
