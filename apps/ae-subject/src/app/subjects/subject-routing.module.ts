import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { I18NEXT_NAMESPACE_RESOLVER } from 'angular-i18next';
import { PendingChangesGuard } from '@ae-labs/core';
import { AeFormMode } from '@ae-labs/ui';
import { SubjectDetailsEditComponent } from './components/subject-details-edit/subject-details-edit.component';
import { SubjectDetailsViewComponent } from './components/subject-details-view/subject-details-view.component';
import { idParam } from './models/constants';
import { SubjectsPageComponent } from './pages/subjects-list/subjects-page.component';

const routes: Routes = [
  {
    path: ``,
    component: SubjectsPageComponent,
    data: {
      i18nextNamespaces: ['subject.subjects', 'subject'],
    },
    resolve: {
      i18next: I18NEXT_NAMESPACE_RESOLVER,
    },
    children: [
      {
        path: `:${idParam}/${AeFormMode.View}`,
        component: SubjectDetailsViewComponent,
      },
      {
        path: `:${idParam}/${AeFormMode.Update}`,
        component: SubjectDetailsEditComponent,
        canDeactivate: [PendingChangesGuard],
      },
      {
        path: `:${idParam}/${AeFormMode.Create}`,
        component: SubjectDetailsEditComponent,
        canDeactivate: [PendingChangesGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubjectRoutingModule {}
