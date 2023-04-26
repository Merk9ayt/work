import { ApplicationOptions } from '@ae-labs/configuration';

export interface ApplicationDefinition {
  displayName: string;
  displayNameKey?: string;
  icon?: [string, string];
  routePath?: string;
  queryParams?: object;
  permissions?: string[];
  options?: ApplicationOptions;
  children?: ApplicationDefinition[];
  i18nextNamespaces?: string | string[];
}
