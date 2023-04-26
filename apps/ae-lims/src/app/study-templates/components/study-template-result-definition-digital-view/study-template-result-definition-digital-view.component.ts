import { Component, Input } from '@angular/core';
import { AeBaseComponent } from '@ae-labs/ui';
import { StudyTemplateResultDefinitionViewModel } from '../../view-models/study-template-result-definition-view-model';

@Component({
  selector: 'ae-lims-study-template-result-definition-digital-view',
  templateUrl: './study-template-result-definition-digital-view.component.html',
  styleUrls: ['./study-template-result-definition-digital-view.component.scss'],
})
export class StudyTemplateResultDefinitionDigitalViewComponent extends AeBaseComponent {
  @Input() viewModel: StudyTemplateResultDefinitionViewModel =
    new StudyTemplateResultDefinitionViewModel();
}
