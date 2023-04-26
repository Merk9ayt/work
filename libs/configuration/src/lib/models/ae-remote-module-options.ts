import { LoadRemoteModuleOptions } from '@angular-architects/module-federation-runtime/lib/loader/dynamic-federation';

export declare type AeRemoteModuleOptions = LoadRemoteModuleOptions & {
  routePath: string;
  ngModuleName: string;
};
