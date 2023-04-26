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
import {
  AE_FEATURE_NAME,
  DocumentStatus,
  OperationType,
  toPatchOperation,
} from '@ae-labs/core';
import { MessageBus } from '@ae-labs/messaging';
import { StudyTemplateResultDefinitionModel } from '../../models/study-template-result-definition.model';
import { StudyTemplateSampleModel } from '../../models/study-template-sample.model';
import { StudyTemplateModel } from '../../models/study-template.model';
import { StudyTemplatesDatasourceService } from '../../services/study-templates-datasource.service';
import {
  CreateStudyTemplate,
  UpdateStudyTemplate,
} from '../../store/study-templates-state.actions';
import { StudyTemplatesState } from '../../store/study-templates.state';
import { StudyTemplateMappingHelpers } from '../../utils/study-template-mapping-helper';
import { StudyTemplateViewModel } from '../../view-models/study-template-view-model';
import { StudyTemplateBaseFormComponent } from '../study-template-base-form.component';

@Component({
  selector: 'ae-lims-study-template-details-edit',
  templateUrl: './study-template-details-edit.component.html',
  styleUrls: ['./study-template-details-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: I18NEXT_NAMESPACE,
      useValue: ['lims.study-templates'],
    },
  ],
})
export class StudyTemplateDetailsEditComponent
  extends StudyTemplateBaseFormComponent
  implements OnInit
{
  template: StudyTemplateModel | undefined;
  baseDataForm = new FormGroup({
    code: new FormControl(),
    revision: new FormControl(),
    name: new FormControl('', [Validators.required]),
    officialName: new FormControl(),
    description: new FormControl(),
  });

  viewModel: StudyTemplateViewModel = new StudyTemplateViewModel();

  constructor(
    router: Router,
    activatedRoute: ActivatedRoute,
    messageBus: MessageBus,
    @Inject(AE_FEATURE_NAME) @Optional() featureName: string,
    store: Store,
    private readonly dataSourceService: StudyTemplatesDatasourceService,
    private readonly cdr: ChangeDetectorRef
  ) {
    super(router, activatedRoute, messageBus, featureName, store);
  }

  override ngOnInit(): void {
    super.ngOnInit();
    this.store
      .select(StudyTemplatesState.selectedStudyTemplate)
      .pipe(takeUntil(this.destroyed$))
      .subscribe(x => {
        this.template = x;
        this.id = x?.id ?? '';
        this.baseDataForm.patchValue({ code: x?.code });
        this.baseDataForm.patchValue({ revision: x?.revision });
        this.baseDataForm.patchValue({ name: x?.name });
        this.baseDataForm.patchValue({ officialName: x?.officialName });
        this.baseDataForm.patchValue({ description: x?.description });
        this.viewModel = new StudyTemplateViewModel(x);
        this.cdr.detectChanges();
      });
  }

  override patchAction(): Observable<void> {
    if (!this.id) {
      throw new Error(`Invalid id`);
    }

    const patch = toPatchOperation(this.baseDataForm);

    if (this.viewModel?.samplesViewModel?.updated) {
      patch.push({
        op: OperationType.Replace,
        value: this.viewModel.samplesViewModel.items.map(s =>
          StudyTemplateMappingHelpers.mapSampleModelToSampleDto(
            s.data as StudyTemplateSampleModel
          )
        ),
        path: 'samples',
      });
    }
    if (this.viewModel?.resultsViewModel?.updated) {
      patch.push({
        op: OperationType.Replace,
        value: this.viewModel.resultsViewModel.items.map(s =>
          StudyTemplateMappingHelpers.mapStudyResultModelToStudyResultDto(
            s.data as StudyTemplateResultDefinitionModel
          )
        ),
        path: 'results',
      });
    }

    return this.store.dispatch(new UpdateStudyTemplate(this.id, patch));
  }

  override createAction(): Observable<void> {
    return this.store.dispatch(
      new CreateStudyTemplate({
        id: '',
        parentId: this.id == 'new' ? '' : this.id,
        code: this.baseDataForm.controls['code'].value,
        revision: this.baseDataForm.controls['revision'].value,
        name: this.baseDataForm.controls['name'].value ?? '',
        officialName: this.baseDataForm.controls['officialName'].value,
        description: this.baseDataForm.controls['description'].value,
        parameters: [],
        samples:
          this.viewModel.samplesViewModel.items.map(
            s => s.data as StudyTemplateSampleModel
          ) ?? [],
        results:
          this.viewModel?.resultsViewModel?.items.map(
            r => r.data as StudyTemplateResultDefinitionModel
          ) ?? [],
        status: DocumentStatus.Draft,
      })
    );
  }

  override get isDirty(): boolean {
    return this.baseDataForm.dirty || this.viewModel?.updated === true;
  }

  override clearDirty(): void {
    this.baseDataForm.markAsPristine();

    if (this.viewModel) {
      this.viewModel.updated = false;
    }
  }

  override get isValid(): boolean {
    return this.baseDataForm.valid;
  }
}
