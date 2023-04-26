import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { I18NEXT_NAMESPACE_RESOLVER } from 'angular-i18next';
import { AeFormMode } from '@ae-labs/ui';
import { StudyOrderTemplateDetailsViewComponent } from './components/study-order-template-details-view/study-order-template-details-view.component';
import { StudyOrderTemplatesPageComponent } from './pages/study-order-templates-list/study-order-templates-page.component';

const routes: Routes = [
  {
    path: '',
    component: StudyOrderTemplatesPageComponent,
    data: {
      i18nextNamespaces: ['lims.study-order-templates', 'lims'],
    },
    resolve: {
      i18next: I18NEXT_NAMESPACE_RESOLVER,
    },
    children: [
      {
        path: `:id/${AeFormMode.View}`,
        component: StudyOrderTemplateDetailsViewComponent,
      },
      // {
      //   path: `:id/${AeFormMode.Update}`,
      //   component: StudyOrderTemplateDetailsEditComponent,
      //   canDeactivate: [PendingChangesGuard],
      // },
      // {
      //   path: `:id/${AeFormMode.Create}`,
      //   component: StudyOrderTemplateDetailsEditComponent,
      //   canDeactivate: [PendingChangesGuard],
      // },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudyOrderTemplatesRoutingModule {}
