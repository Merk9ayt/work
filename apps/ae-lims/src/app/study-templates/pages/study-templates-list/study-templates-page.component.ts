import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable, takeUntil } from 'rxjs';
import { AeBaseComponent, AeFormMode } from '@ae-labs/ui';
import { StudyTemplateBaseModel } from '../../models/study-template-base.model';
import { LoadStudyTemplates } from '../../store/study-templates-state.actions';
import { StudyTemplatesState } from '../../store/study-templates.state';

@Component({
  selector: 'ae-lims-study-templates-page',
  templateUrl: './study-templates-page.component.html',
  styleUrls: ['./study-templates-page.component.scss'],
})
export class StudyTemplatesPageComponent
  extends AeBaseComponent
  implements OnInit
{
  studyTemplates$: Observable<StudyTemplateBaseModel[]> | undefined;

  constructor(
    private readonly store: Store,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute
  ) {
    super();
  }

  ngOnInit(): void {
    this.studyTemplates$ = this.store
      .select(StudyTemplatesState.studyTemplatesList)
      .pipe(takeUntil(this.destroyed$));

    this.store.dispatch(LoadStudyTemplates);
  }

  studyTemplateSelect(template: StudyTemplateBaseModel): void {
    this.router
      .navigate([template.id, AeFormMode.View], {
        relativeTo: this.activatedRoute,
      })
      .then();
  }

  studyTemplateCreate(template?: StudyTemplateBaseModel): void {
    this.router
      .navigate([template?.id ?? 'new', AeFormMode.Create], {
        relativeTo: this.activatedRoute,
      })
      .then();
  }
}
