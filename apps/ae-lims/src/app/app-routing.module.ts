import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: 'study-templates',
    loadChildren: () =>
      import('./study-templates/study-templates.module').then(
        m => m.StudyTemplatesModule
      ),
  },
  {
    path: 'study-order-templates',
    loadChildren: () =>
      import('./study-order-templates/study-order-templates.module').then(
        m => m.StudyOrderTemplatesModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
