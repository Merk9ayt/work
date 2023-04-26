import { SampleRequestStatus } from './sample-request-status.enum';
import { SampleSource } from './sample-source.model';

export interface SampleRequest {
  plannedDate?: string;
  source: SampleSource;
  status: SampleRequestStatus;
}
