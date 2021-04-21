import { TestBed } from '@angular/core/testing';

import { AuthSericeService } from './auth-serice.service';

describe('AuthSericeService', () => {
  let service: AuthSericeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthSericeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
