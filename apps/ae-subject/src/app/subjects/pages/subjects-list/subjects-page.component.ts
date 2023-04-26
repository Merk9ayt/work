import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable, takeUntil } from 'rxjs';
import { AeBaseComponent, AeFormMode } from '@ae-labs/ui';
import { SubjectModel } from '../../models/subject.model';
import { LoadSubjects } from '../../store/subject-state.actions';
import { SubjectState } from '../../store/subject.state';

@Component({
  selector: 'ae-subject-subjects-page',
  templateUrl: './subjects-page.component.html',
  styleUrls: ['./subjects-page.component.scss'],
})
export class SubjectsPageComponent extends AeBaseComponent implements OnInit {
  subjects$: Observable<SubjectModel[]> | undefined;

  constructor(
    private readonly store: Store,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute
  ) {
    super();
  }

  ngOnInit(): void {
    this.subjects$ = this.store
      .select(SubjectState.SubjectsList)
      .pipe(takeUntil(this.destroyed$));

    this.activatedRoute.queryParamMap
      .pipe(takeUntil(this.destroyed$))
      .subscribe(params => {
        const typeId = params.get('typeId') ?? '';
        if (typeId) {
          this.store.dispatch(new LoadSubjects(typeId));
        }
      });
  }

  subjectSelect(subject: SubjectModel): void {
    this.router
      .navigate([subject.id, AeFormMode.View], {
        queryParams: { typeId: subject.typeId },
        relativeTo: this.activatedRoute,
      })
      .then();
  }
}
