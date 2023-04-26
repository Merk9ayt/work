import { ApiServices, ApplicationDefinition } from '../models';

export class SetApplications {
  static readonly type = '[AeConfiguration] Load Applications';

  constructor(public apps: ApplicationDefinition[]) {}
}

export class SetServices {
  static readonly type = '[AeConfiguration] Set Services';

  constructor(public services: ApiServices) {}
}
