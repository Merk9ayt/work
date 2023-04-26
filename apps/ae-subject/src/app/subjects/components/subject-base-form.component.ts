import { Component, Inject, OnInit, Optional } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { takeUntil } from 'rxjs';
import { AE_FEATURE_NAME } from '@ae-labs/core';
import { MessageBus } from '@ae-labs/messaging';
import { AeFormBaseComponent, AeFormMode } from '@ae-labs/ui';
import { LoadSubject } from '../store/subject-state.actions';
import { SubjectState } from '../store/subject.state';

@Component({
  selector: 'ae-subject-form-base',
  template: '',
})
export abstract class SubjectBaseFormComponent
  extends AeFormBaseComponent
  implements OnInit
{
  id? = '';
  typeId = '';

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
          this.store.dispatch(new LoadSubject(id));
        }
      });
    this.store
      .select(SubjectState.selectedId)
      .pipe(takeUntil(this.destroyed$))
      .subscribe(id => {
        this.id = id;
      });

    this.store
      .select(SubjectState.typeId)
      .pipe(takeUntil(this.destroyed$))
      .subscribe(id => {
        this.typeId = id;
      });
  }

  override get BaseViewUrl(): string {
    return `subjects`;
  }

  override get BaseViewQueryParameters(): object {
    return { typeId: this.typeId };
  }

  override get ViewUrl(): string {
    return `subjects/${this.id}/${AeFormMode.View}`;
  }

  override get ViewQueryParameters(): object {
    return { typeId: this.typeId };
  }

  override get UpdateUrl(): string {
    return `subjects/${this.id}/${AeFormMode.Update}`;
  }

  override get UpdateQueryParameters(): object {
    return { typeId: this.typeId };
  }

  override get CreateUrl(): string {
    return `subjects/${this.id}/${AeFormMode.Create}`;
  }

  override get CreateQueryParameters(): object {
    return { typeId: this.typeId };
  }
}
