import { Component, Inject, OnInit, Optional } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { takeUntil } from 'rxjs';
import { AE_FEATURE_NAME } from '@ae-labs/core';
import { MessageBus } from '@ae-labs/messaging';
import { AeFormBaseComponent, AeFormMode } from '@ae-labs/ui';
import { LoadSampleSource } from '../store/sample-sources-state.actions';
import { SampleSourcesState } from '../store/sample-sources.state';

@Component({
  selector: 'ae-lims-ui-sample-source-form-base',
  template: '',
})
export abstract class SampleSourceBaseFormComponent
  extends AeFormBaseComponent
  implements OnInit
{
  id? = '';

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
          this.store.dispatch(new LoadSampleSource(id));
        }
      });
    this.store
      .select(SampleSourcesState.selectedId)
      .pipe(takeUntil(this.destroyed$))
      .subscribe(id => {
        this.id = id;
      });
  }

  override get BaseViewUrl(): string {
    return 'sample-sources';
  }

  override get ViewUrl(): string {
    return `${this.BaseViewUrl}/${this.id}/${AeFormMode.View}`;
  }

  override get UpdateUrl(): string {
    return `${this.BaseViewUrl}/${this.id}/${AeFormMode.Update}`;
  }

  override get CreateUrl(): string {
    return `${this.BaseViewUrl}/${this.id}/${AeFormMode.Create}`;
  }
}
