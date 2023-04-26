import { Task } from '@ae-labs/ui';
import { SampleRequest } from './sample-request';

export interface SampleRequestTask extends Task {
  request: SampleRequest;
}
