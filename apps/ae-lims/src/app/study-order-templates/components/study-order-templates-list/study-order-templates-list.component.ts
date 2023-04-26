import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { StudyOrderTemplateBaseModel } from '../../models/study-order-template-base.model';

@Component({
  selector: 'ae-lims-study-order-templates-list',
  templateUrl: './study-order-templates-list.component.html',
  styleUrls: ['./study-order-templates-list.component.scss'],
})
export class StudyOrderTemplatesListComponent {
  @Input() studyTemplates$:
    | Observable<StudyOrderTemplateBaseModel[]>
    | undefined;
  @Output() studyTemplateSelected =
    new EventEmitter<StudyOrderTemplateBaseModel>();
  @Output() studyTemplateCreate =
    new EventEmitter<StudyOrderTemplateBaseModel>();

  selectedTemplate?: StudyOrderTemplateBaseModel;

  get canAdd(): boolean {
    return true;
  }

  onSelect(template: StudyOrderTemplateBaseModel): void {
    this.studyTemplateSelected.emit(template);
  }

  add(): void {
    this.studyTemplateCreate.emit(this.selectedTemplate);
  }
}
