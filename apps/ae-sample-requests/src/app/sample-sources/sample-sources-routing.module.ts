import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { I18NEXT_NAMESPACE_RESOLVER } from 'angular-i18next';
import { PendingChangesGuard } from '@ae-labs/core';
import { AeFormMode } from '@ae-labs/ui';
import { SampleSourceDetailsEditComponent } from './components/sample-source-details-edit/sample-source-details-edit.component';
import { SampleSourceDetailsViewComponent } from './components/sample-source-details-view/sample-source-details-view.component';
import { SampleSourcesPageComponent } from './pages/sample-sources-list/sample-sources-page.component';

const routes: Routes = [
  {
    path: '',
    component: SampleSourcesPageComponent,
    data: {
      i18nextNamespaces: ['sample-sources'],
    },
    resolve: {
      i18next: I18NEXT_NAMESPACE_RESOLVER,
    },
    children: [
      {
        path: `:id/${AeFormMode.View}`,
        component: SampleSourceDetailsViewComponent,
      },
      {
        path: `:id/${AeFormMode.Update}`,
        component: SampleSourceDetailsEditComponent,
        canDeactivate: [PendingChangesGuard],
      },
      {
        path: `:id/${AeFormMode.Create}`,
        component: SampleSourceDetailsEditComponent,
        canDeactivate: [PendingChangesGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SampleSourcesRoutingModule {}
