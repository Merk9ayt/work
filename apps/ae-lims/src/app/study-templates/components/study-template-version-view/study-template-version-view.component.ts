import { Component, Input } from '@angular/core';
import {I18NEXT_NAMESPACE} from "angular-i18next";
import { StudyTemplateBaseModel } from '../../models/study-template-base.model';

@Component({
  selector: 'ae-lims-study-template-version-view',
  templateUrl: './study-template-version-view.component.html',
  styleUrls: ['./study-template-version-view.component.scss'],
  providers: [
    {
      provide: I18NEXT_NAMESPACE,
      useValue: 'common',
    },
  ],
})
export class StudyTemplateVersionViewComponent {
  @Input() version?: StudyTemplateBaseModel;
}
