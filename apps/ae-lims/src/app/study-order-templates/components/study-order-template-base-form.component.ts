import { Component, Inject, OnInit, Optional } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { takeUntil } from 'rxjs';
import { AE_FEATURE_NAME } from '@ae-labs/core';
import { MessageBus } from '@ae-labs/messaging';
import { AeFormBaseComponent, AeFormMode } from '@ae-labs/ui';
import { StudyOrderTemplatesState } from '../store/study-order-templates.state';
import { LoadStudyOrderTemplate } from '../store/studyorder--templates-state.actions';

@Component({
  selector: 'ae-lims-ui-study-order-template-form-base',
  template: '',
})
export abstract class StudyOrderTemplateBaseFormComponent
  extends AeFormBaseComponent
  implements OnInit
{
  id = '';

  protected constructor(
    router: Router,
    activatedRoute: ActivatedRoute,
    messageBus: MessageBus,
    @Inject(AE_FEATURE_NAME) @Optional() featureName: string,
    protected readonly store: Store
  ) {
    super(router, activatedRoute, messageBus, featureName);
  }

  override ngOnInit(): void {
    super.ngOnInit();
    this.activatedRoute.paramMap
      .pipe(takeUntil(this.destroyed$))
      .subscribe(params => {
        const id = params.get('id') ?? '';
        if (id) {
          this.store.dispatch(new LoadStudyOrderTemplate(id));
        }
      });
    this.store
      .select(StudyOrderTemplatesState.selectedId)
      .pipe(takeUntil(this.destroyed$))
      .subscribe(c => {
        this.id = c ?? '';
      });
  }

  override get BaseViewUrl(): string {
    return 'study-templates';
  }

  override get ViewUrl(): string {
    if (this.id == 'new') {
      return 'study-order-templates';
    }
    return `study-order-templates/${this.id}/${AeFormMode.View}`;
  }

  override get UpdateUrl(): string {
    return `study-order-templates/${this.id}/${AeFormMode.Update}`;
  }

  override get CreateUrl(): string {
    return `study-order-templates/${this.id}/${AeFormMode.Create}`;
  }
}
