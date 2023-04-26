import { Component, Input } from '@angular/core';
import { I18NEXT_NAMESPACE } from 'angular-i18next';
import { DocumentStatus } from '@ae-labs/core';
import { AeBaseComponent } from '@ae-labs/ui';
import { StudyTemplateBaseModel } from '../../models/study-template-base.model';


@Component({
  selector: 'ae-lims-study-template-card',
  templateUrl: './study-template-card.component.html',
  styleUrls: ['./study-template-card.component.scss'],
  providers: [
    {
      provide: I18NEXT_NAMESPACE,
      useValue: ['lims.study-templates'],
    },
  ],
})
export class StudyTemplateCardComponent extends AeBaseComponent {
  @Input() studyTemplate: StudyTemplateBaseModel = {
    id: '',
    code: '',
    name: '',
    status: DocumentStatus.Outdated,
    revision: '',
  };
}
