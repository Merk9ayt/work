import { TestBed } from '@angular/core/testing';
import { AeErrorHandlerService } from './ae-error-handler.service';

describe('AeErrorHandlerService', () => {
  let service: AeErrorHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AeErrorHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
