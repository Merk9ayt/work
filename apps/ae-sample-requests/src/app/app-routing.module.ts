import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'sample-sources',
  },
  {
    path: 'sample-requests',
    loadChildren: () =>
      import('./sample-requests/sample-requests.module').then(
        m => m.SampleRequestsModule
      ),
  },
  {
    path: 'sample-sources',
    loadChildren: () =>
      import('./sample-sources/sample-sources.module').then(m => {
        console.log('!!!!!');
        return m.SampleSourcesModule;
      }),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
