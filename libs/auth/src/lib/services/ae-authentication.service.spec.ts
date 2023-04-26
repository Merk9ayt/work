import { TestBed } from '@angular/core/testing';
import { AeAuthenticationService } from './ae-authentication.service';

describe('AeAuthenticationService', () => {
  let service: AeAuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AeAuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
