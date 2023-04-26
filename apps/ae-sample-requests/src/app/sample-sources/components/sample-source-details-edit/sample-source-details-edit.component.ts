import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Inject,
  OnInit,
  Optional,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { I18NEXT_NAMESPACE } from 'angular-i18next';
import { Observable, takeUntil } from 'rxjs';
import { AE_FEATURE_NAME } from '@ae-labs/core';
import { MessageBus } from '@ae-labs/messaging';
import { SampleSourceModel } from '../../models/sample-source.model';
import { SampleSourcesDatasourceService } from '../../services/sample-sources-datasource.service';
import { CreateSampleSource } from '../../store/sample-sources-state.actions';
import { SampleSourcesState } from '../../store/sample-sources.state';
import { SampleSourceBaseFormComponent } from '../sample-source-base-form.component';

@Component({
  selector: 'ae-lims-sample-source-details-edit',
  templateUrl: './sample-source-details-edit.component.html',
  styleUrls: ['./sample-source-details-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: I18NEXT_NAMESPACE,
      useValue: ['sample-sources'],
    },
  ],
})
export class SampleSourceDetailsEditComponent
  extends SampleSourceBaseFormComponent
  implements OnInit
{
  sampleSource: SampleSourceModel | undefined;
  baseDataForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    description: new FormControl(),
  });

  constructor(
    router: Router,
    activatedRoute: ActivatedRoute,
    messageBus: MessageBus,
    @Inject(AE_FEATURE_NAME) @Optional() featureName: string,
    store: Store,
    private readonly dataSourceService: SampleSourcesDatasourceService,
    private readonly cdr: ChangeDetectorRef
  ) {
    super(router, activatedRoute, messageBus, featureName, store);
  }

  override ngOnInit(): void {
    super.ngOnInit();
    this.store
      .select(SampleSourcesState.selectedSampleSource)
      .pipe(takeUntil(this.destroyed$))
      .subscribe(x => {
        this.sampleSource = x;
        this.id = x?.id ?? '';
        this.baseDataForm.patchValue({ name: x?.name });
        this.baseDataForm.patchValue({ description: x?.description });
        // this.viewModel = new StudyTemplateViewModel(x);
        this.cdr.detectChanges();
      });
  }

  override createAction(): Observable<void> {
    return this.store.dispatch(
      new CreateSampleSource({
        name: this.baseDataForm.controls['name'].value ?? '',
        description: this.baseDataForm.controls['description'].value,
        specimens: [],
      })
    );
  }

  override get isDirty(): boolean {
    return this.baseDataForm.dirty;
  }

  override clearDirty(): void {
    this.baseDataForm.markAsPristine();
  }

  override get isValid(): boolean {
    return this.baseDataForm.valid;
  }
}
