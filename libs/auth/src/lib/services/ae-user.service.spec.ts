import { TestBed } from '@angular/core/testing';
import { AeUserService } from './ae-user.service';

describe('AeUserService', () => {
  let service: AeUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AeUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
