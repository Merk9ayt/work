import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {
  DialogService,
  DynamicDialogConfig,
  DynamicDialogRef,
} from 'primeng/dynamicdialog';
import { AeBaseComponent } from '@ae-labs/ui';
import { StudyTemplateResultPrecisionItemViewModel } from '../../view-models/study-template-result-precsion-item-view-model';

@Component({
  selector: 'ae-lims-study-result-precision-edit',
  templateUrl: './study-template-result-precision-edit.component.html',
  styleUrls: ['./study-template-result-precision-edit.component.scss'],
})
export class StudyTemplateResultPrecisionEditComponent
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

  viewModel: StudyTemplateResultPrecisionItemViewModel =
    new StudyTemplateResultPrecisionItemViewModel();

  ngOnInit(): void {
    this.viewModel = this.config.data;
    this.cdr.detectChanges();
  }

  get canOk(): boolean {
    return this.viewModel?.canOk ?? false;
  }

  ok(): void {
    if (!this.canOk) {
      return;
    }

    this.viewModel?.ok();
    this.ref.close(this.viewModel);
  }

  cancel(): void {
    this.ref.close();
  }

  async selectPrecision(): Promise<void> {
    await this.viewModel.selectPrecision(this.dialogService);
    this.cdr.detectChanges();
  }

  async selectUnit(): Promise<void> {
    this.viewModel?.selectUnit(this.dialogService);
  }
}
