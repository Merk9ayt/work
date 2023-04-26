import { SampleRequest } from '../models/sample-request';

export interface SampleRequestsStateModel {
  todo: SampleRequest[];
  inProgress: SampleRequest[];
  completed: SampleRequest[];
}
