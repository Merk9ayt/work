import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { StudyTemplateBaseModel } from '../../models/study-template-base.model';

@Component({
  selector: 'ae-lims-study-templates-list',
  templateUrl: './study-templates-list.component.html',
  styleUrls: ['./study-templates-list.component.scss'],
})
export class StudyTemplatesListComponent {
  @Input() studyTemplates$: Observable<StudyTemplateBaseModel[]> | undefined;
  @Output() studyTemplateSelected = new EventEmitter<StudyTemplateBaseModel>();
  @Output() studyTemplateCreate = new EventEmitter<StudyTemplateBaseModel>();

  selectedTemplate?: StudyTemplateBaseModel;

  get canAdd(): boolean {
    return true;
  }

  onSelect(template: StudyTemplateBaseModel): void {
    this.studyTemplateSelected.emit(template);
  }

  add(): void {
    this.studyTemplateCreate.emit(this.selectedTemplate);
  }
}
