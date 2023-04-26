import { ApiServices } from './api-service-definition';
import { ApplicationDefinition } from './application-definition';

export interface Configuration {
  applications: ApplicationDefinition[];
  services: ApiServices;
}
