import { Component, Input } from '@angular/core';
import { I18NEXT_NAMESPACE } from 'angular-i18next';
import { AeBaseComponent } from '@ae-labs/ui';
import { StudyTemplateResultDefinitionViewModel } from '../../view-models/study-template-result-definition-view-model';

@Component({
  selector: 'ae-lims-study-template-result-definition-digital-view',
  templateUrl: './study-template-result-definition-digital-view.component.html',
  styleUrls: ['./study-template-result-definition-digital-view.component.scss'],
  providers: [
    {
      provide: I18NEXT_NAMESPACE,
      useValue: 'lims',
    },
  ],
})
export class StudyTemplateResultDefinitionDigitalViewComponent extends AeBaseComponent {
  @Input() viewModel: StudyTemplateResultDefinitionViewModel =
    new StudyTemplateResultDefinitionViewModel();
}
