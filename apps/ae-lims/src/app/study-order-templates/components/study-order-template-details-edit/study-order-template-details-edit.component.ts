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
  toPatchOperation,
} from '@ae-labs/core';
import { MessageBus } from '@ae-labs/messaging';
import { StudyOrderTemplateModel } from '../../models/study-order-template.model';
import { StudyOrderTemplatesDatasourceService } from '../../services/study-order-templates-datasource.service';
import { StudyOrderTemplatesState } from '../../store/study-order-templates.state';
import {
  CreateStudyOrderTemplate,
  UpdateStudyOrderTemplate,
} from '../../store/studyorder--templates-state.actions';
import { StudyOrderTemplateViewModel } from '../../view-models/study-order-template-view-model';
import { StudyOrderTemplateBaseFormComponent } from '../study-order-template-base-form.component';

@Component({
  selector: 'ae-lims-study-order-template-details-edit',
  templateUrl: './study-order-template-details-edit.component.html',
  styleUrls: ['./study-order-template-details-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: I18NEXT_NAMESPACE,
      useValue: ['lims.study-templates'],
    },
  ],
})
export class StudyOrderTemplateDetailsEditComponent
  extends StudyOrderTemplateBaseFormComponent
  implements OnInit
{
  template: StudyOrderTemplateModel | undefined;
  baseDataForm = new FormGroup({
    code: new FormControl(),
    revision: new FormControl(),
    name: new FormControl('', [Validators.required]),
    officialName: new FormControl(),
    description: new FormControl(),
  });

  viewModel: StudyOrderTemplateViewModel = new StudyOrderTemplateViewModel();

  constructor(
    router: Router,
    activatedRoute: ActivatedRoute,
    messageBus: MessageBus,
    @Inject(AE_FEATURE_NAME) @Optional() featureName: string,
    store: Store,
    private readonly dataSourceService: StudyOrderTemplatesDatasourceService,
    private readonly cdr: ChangeDetectorRef
  ) {
    super(router, activatedRoute, messageBus, featureName, store);
  }

  override ngOnInit(): void {
    super.ngOnInit();
    this.store
      .select(StudyOrderTemplatesState.selectedStudyOrderTemplate)
      .pipe(takeUntil(this.destroyed$))
      .subscribe(x => {
        this.template = x;
        this.id = x?.id ?? '';
        this.baseDataForm.patchValue({ code: x?.code });
        this.baseDataForm.patchValue({ revision: x?.revision });
        this.baseDataForm.patchValue({ name: x?.name });
        this.baseDataForm.patchValue({ description: x?.description });
        this.viewModel = new StudyOrderTemplateViewModel(x);
        this.cdr.detectChanges();
      });
  }

  override patchAction(): Observable<void> {
    if (!this.id) {
      throw new Error(`Invalid id`);
    }

    const patch = toPatchOperation(this.baseDataForm);

    // if (this.viewModel?.samplesViewModel?.updated) {
    //   patch.push({
    //     op: OperationType.Replace,
    //     value: this.viewModel.samplesViewModel.items.map(s =>
    //       StudyTemplateMappingHelpers.mapSampleModelToSampleDto(
    //         s.data as StudyTemplateSampleModel
    //       )
    //     ),
    //     path: 'samples',
    //   });
    // }
    // if (this.viewModel?.resultsViewModel?.updated) {
    //   patch.push({
    //     op: OperationType.Replace,
    //     value: this.viewModel.resultsViewModel.items.map(s =>
    //       StudyTemplateMappingHelpers.mapStudyResultModelToStudyResultDto(
    //         s.data as StudyTemplateResultDefinitionModel
    //       )
    //     ),
    //     path: 'results',
    //   });
    // }

    return this.store.dispatch(new UpdateStudyOrderTemplate(this.id, patch));
  }

  override createAction(): Observable<void> {
    return this.store.dispatch(
      new CreateStudyOrderTemplate({
        id: '',
        parentId: this.id == 'new' ? '' : this.id,
        code: this.baseDataForm.controls['code'].value,
        revision: this.baseDataForm.controls['revision'].value,
        name: this.baseDataForm.controls['name'].value ?? '',
        description: this.baseDataForm.controls['description'].value,
        studies: [],
        // parameters: [],
        // samples:
        //   this.viewModel.samplesViewModel.items.map(
        //     s => s.data as StudyTemplateSampleModel
        //   ) ?? [],
        // results:
        //   this.viewModel?.resultsViewModel?.items.map(
        //     r => r.data as StudyTemplateResultDefinitionModel
        //   ) ?? [],
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
