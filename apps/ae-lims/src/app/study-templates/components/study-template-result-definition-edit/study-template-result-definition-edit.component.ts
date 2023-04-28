import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { I18NEXT_NAMESPACE } from 'angular-i18next';
import {
  DialogService,
  DynamicDialogConfig,
  DynamicDialogRef,
} from 'primeng/dynamicdialog';
import { AeBaseComponent } from '@ae-labs/ui';
import { StudyTemplateResultDefinitionViewModel } from '../../view-models/study-template-result-definition-view-model';

@Component({
  selector: 'ae-lims-study-result-definition-edit',
  templateUrl: './study-template-result-definition-edit.component.html',
  styleUrls: ['./study-template-result-definition-edit.component.scss'],
  providers: [
    {
      provide: I18NEXT_NAMESPACE,
      useValue: 'subject',
    },
  ],
})
export class StudyTemplateResultDefinitionEditComponent
  extends AeBaseComponent
  implements OnInit
{
  constructor(
    private readonly ref: DynamicDialogRef,
    private readonly config: DynamicDialogConfig,
    private readonly cdr: ChangeDetectorRef,
    private readonly dialogService: DialogService
  ) {
    super();
  }

  viewModel: StudyTemplateResultDefinitionViewModel =
    new StudyTemplateResultDefinitionViewModel();

  ngOnInit(): void {
    this.viewModel = this.config.data;
    this.viewModel.precisionListViewModel.onUpdated.subscribe(() => {
      this.cdr.detectChanges();
    });

    this.cdr.detectChanges();
  }

  get canOk(): boolean {
    return this.viewModel.canOk;
  }

  ok(): void {
    this.viewModel.ok();
    this.ref.close(this.viewModel);
  }

  cancel(): void {
    this.ref.close();
  }

  async selectResultType(): Promise<void> {
    this.viewModel.selectResultType(this.dialogService);
    this.cdr.detectChanges();
  }

  async selectSpecimen(): Promise<void> {
    this.viewModel.selectSpecimen(this.dialogService);
    this.cdr.detectChanges();
  }

  async selectUnit(): Promise<void> {
    this.viewModel.selectUnit(this.dialogService);
    this.cdr.detectChanges();
  }
}
