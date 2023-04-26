import { Component, Input } from '@angular/core';
import { DocumentStatus } from '@ae-labs/core';
import { AeBaseComponent } from '@ae-labs/ui';
import { StudyOrderTemplateBaseModel } from '../../models/study-order-template-base.model';

@Component({
  selector: 'ae-lims-study-order-template-card',
  templateUrl: './study-order-template-card.component.html',
  styleUrls: ['./study-order-template-card.component.scss'],
})
export class StudyOrderTemplateCardComponent extends AeBaseComponent {
  @Input() studyOrderTemplate: StudyOrderTemplateBaseModel = {
    id: '',
    code: '',
    name: '',
    status: DocumentStatus.Outdated,
    revision: '',
  };
}
