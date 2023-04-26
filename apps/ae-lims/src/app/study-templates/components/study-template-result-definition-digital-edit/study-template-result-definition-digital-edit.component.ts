import { Component, Input } from '@angular/core';
import { I18NEXT_NAMESPACE } from 'angular-i18next';
import { AeBaseComponent, AeFormMode } from '@ae-labs/ui';
import { StudyTemplateResultDefinitionViewModel } from '../../view-models/study-template-result-definition-view-model';

@Component({
  selector: 'ae-lims-study-result-definition-digital-edit',
  templateUrl: './study-template-result-definition-digital-edit.component.html',
  styleUrls: ['./study-template-result-definition-digital-edit.component.scss'],
  providers: [
    {
      provide: I18NEXT_NAMESPACE,
      useValue: 'lims.study-templates',
    },
  ],
})
export class StudyTemplateResultDefinitionDigitalEditComponent extends AeBaseComponent {
  @Input() viewModel: StudyTemplateResultDefinitionViewModel =
    new StudyTemplateResultDefinitionViewModel();

  formMode: AeFormMode = AeFormMode.Update;
}
