import { SampleRequestTask } from '../models/sample-request-task';

export class LoadRequestForToday {
  static readonly type = '[AeSampleRequests] Load Requests For Today';
}

export class RunSampleRequest {
  static readonly type = '[AeSampleRequests] Run Request';

  constructor(public request: SampleRequestTask) {}
}

export class CompleteSampleRequest {
  static readonly type = '[AeSampleRequests] Complete Request';

  constructor(public request: SampleRequestTask) {}
}

export class CancelSampleRequest {
  static readonly type = '[AeSampleRequests] Cancel Request';

  constructor(public request: SampleRequestTask) {}
}
