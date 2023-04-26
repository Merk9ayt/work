import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { I18NextModule } from 'angular-i18next';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Observable, takeUntil } from 'rxjs';
import { AeBaseComponent } from '@ae-labs/ui';
import { SubjectModel } from '../../models/subject.model';
import { LoadSubjects } from '../../store/subject-state.actions';
import { SubjectState } from '../../store/subject.state';
import { SubjectModule } from '../../subject.module';

@Component({
  standalone: true,
  selector: 'ae-subject-subject-select',
  templateUrl: './subject-select.component.html',
  styleUrls: ['./subject-select.component.scss'],

  imports: [
    CommonModule,
    SubjectModule,
    I18NextModule,
    ButtonModule,
    DialogModule,
  ],
})
export class SubjectSelectComponent extends AeBaseComponent implements OnInit {
  subjects$: Observable<SubjectModel[]> | undefined;

  constructor(
    private readonly store: Store,
    private readonly ref: DynamicDialogRef,
    private readonly config: DynamicDialogConfig
  ) {
    super();
  }

  selectedSubject?: SubjectModel;

  get canOk(): boolean {
    return !!this.selectedSubject;
  }

  ngOnInit(): void {
    this.subjects$ = this.store
      .select(SubjectState.SubjectsList)
      .pipe(takeUntil(this.destroyed$));
    this.store.dispatch(new LoadSubjects(this.config.data.subjectType));
  }

  select(subject: SubjectModel): void {
    this.selectedSubject = subject;
  }

  ok(): void {
    if (this.selectedSubject) {
      this.ref.close(this.selectedSubject);
    }
  }

  cancel(): void {
    this.ref.close();
  }
}
