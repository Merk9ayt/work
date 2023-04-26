import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { I18NEXT_NAMESPACE_RESOLVER } from 'angular-i18next';
import { PendingChangesGuard } from '@ae-labs/core';
import { AeFormMode } from '@ae-labs/ui';
import { StudyTemplateDetailsEditComponent } from './components/study-template-details-edit/study-template-details-edit.component';
import { StudyTemplateDetailsViewComponent } from './components/study-template-details-view/study-template-details-view.component';
import { StudyTemplatesPageComponent } from './pages/study-templates-list/study-templates-page.component';

const routes: Routes = [
  {
    path: '',
    component: StudyTemplatesPageComponent,
    data: {
      i18nextNamespaces: ['lims.study-templates', 'lims'],
    },
    resolve: {
      i18next: I18NEXT_NAMESPACE_RESOLVER,
    },
    children: [
      {
        path: `:id/${AeFormMode.View}`,
        component: StudyTemplateDetailsViewComponent,
      },
      {
        path: `:id/${AeFormMode.Update}`,
        component: StudyTemplateDetailsEditComponent,
        canDeactivate: [PendingChangesGuard],
      },
      {
        path: `:id/${AeFormMode.Create}`,
        component: StudyTemplateDetailsEditComponent,
        canDeactivate: [PendingChangesGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudyTemplatesRoutingModule {}
