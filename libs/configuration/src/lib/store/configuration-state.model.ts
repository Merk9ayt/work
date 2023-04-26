import { ApiServices, ApplicationDefinition } from '../models';

export interface ConfigurationStateModel {
  applications: ApplicationDefinition[];
  services: ApiServices;
}
