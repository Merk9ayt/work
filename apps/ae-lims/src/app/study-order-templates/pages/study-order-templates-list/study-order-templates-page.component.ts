import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable, takeUntil } from 'rxjs';
import { AeBaseComponent, AeFormMode } from '@ae-labs/ui';
import { StudyOrderTemplateBaseModel } from '../../models/study-order-template-base.model';
import { StudyOrderTemplatesState } from '../../store/study-order-templates.state';
import { LoadStudyOrderTemplates } from '../../store/studyorder--templates-state.actions';

@Component({
  selector: 'ae-lims-study-order-templates-page',
  templateUrl: './study-order-templates-page.component.html',
  styleUrls: ['./study-order-templates-page.component.scss'],
})
export class StudyOrderTemplatesPageComponent
  extends AeBaseComponent
  implements OnInit
{
  studyTemplates$: Observable<StudyOrderTemplateBaseModel[]> | undefined;

  constructor(
    private readonly store: Store,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute
  ) {
    super();
  }

  ngOnInit(): void {
    this.studyTemplates$ = this.store
      .select(StudyOrderTemplatesState.studyOrderTemplatesList)
      .pipe(takeUntil(this.destroyed$));

    this.store.dispatch(LoadStudyOrderTemplates);
  }

  studyTemplateSelect(template: StudyOrderTemplateBaseModel): void {
    this.router
      .navigate([template.id, AeFormMode.View], {
        relativeTo: this.activatedRoute,
      })
      .then();
  }

  studyTemplateCreate(template?: StudyOrderTemplateBaseModel): void {
    this.router
      .navigate([template?.id ?? 'new', AeFormMode.Create], {
        relativeTo: this.activatedRoute,
      })
      .then();
  }
}
