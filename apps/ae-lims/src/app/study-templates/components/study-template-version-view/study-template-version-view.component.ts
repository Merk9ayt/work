import { Component, Input } from '@angular/core';
import { StudyTemplateBaseModel } from '../../models/study-template-base.model';

@Component({
  selector: 'ae-lims-study-template-version-view',
  templateUrl: './study-template-version-view.component.html',
  styleUrls: ['./study-template-version-view.component.scss'],
})
export class StudyTemplateVersionViewComponent {
  @Input() version?: StudyTemplateBaseModel;
}
