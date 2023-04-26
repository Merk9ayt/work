import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { SubjectModel } from '../../models/subject.model';

@Component({
  selector: 'ae-subject-list',
  templateUrl: './subjects-list.component.html',
  styleUrls: ['./subjects-list.component.scss'],
})
export class SubjectsListComponent {
  @Input() subjects$: Observable<SubjectModel[]> | undefined;

  @Output() subjectSelected = new EventEmitter<SubjectModel>();

  selected(subject: SubjectModel): void {
    this.subjectSelected.emit(subject);
  }
}
