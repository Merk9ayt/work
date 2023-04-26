import { TestBed } from '@angular/core/testing';
import { SampleRequestDataSourceService } from './sample-request-data-source.service';

describe('SampleRequestDataSourceService', () => {
  let service: SampleRequestDataSourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SampleRequestDataSourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
