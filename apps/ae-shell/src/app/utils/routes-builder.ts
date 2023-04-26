import { Routes } from '@angular/router';
import {
  loadRemoteModule,
  LoadRemoteModuleOptions,
} from '@angular-architects/module-federation';
import { AeAuthenticationGuard } from '@ae-labs/auth';
import { ApplicationDefinition } from '@ae-labs/configuration';
import { appRoutes } from '../app-routing.module';
import { flattenApplications } from './app-definition-utils';

export function buildRoutes(applications: ApplicationDefinition[]): Routes {
  /* eslint-disable @typescript-eslint/no-non-null-assertion */
  const lazyRoutes: Routes = flattenApplications(applications)
    .filter(app => !!app.options)
    .map(app => {
      switch (app.options!.type) {
        case 'internal':
          return {
            path: app.routePath,
            canActivate: [AeAuthenticationGuard],
            data: {
              permissions: app.permissions ? [...app.permissions] : undefined,
            },
            loadChildren: () =>
              import(`${app.options!.url}`).then(
                m => m[`${app.options!.module}Module`]
              ),
          };
        case 'remote': {
          const module = {
            type: 'module',
            remoteEntry: app.options!.url,
            exposedModule: `./${app.options!.module}`,
          } as LoadRemoteModuleOptions;
          return {
            path: app.routePath,
            canActivate: [AeAuthenticationGuard],
            data: {
              permissions: app.permissions ? [...app.permissions] : undefined,
            },
            loadChildren: () =>
              loadRemoteModule(module).then(
                m => m[`${app.options!.module}Module`]
              ),
          };
        }
      }
    });
  /* eslint-enable @typescript-eslint/no-non-null-assertion */

  const appsEntryPoint = appRoutes.find(x => x.path === '');
  if (appsEntryPoint) {
    appsEntryPoint.children = lazyRoutes;
  }

  return appRoutes;
}
