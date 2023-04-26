import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { AeBaseComponent, AeFormMode } from '@ae-labs/ui';
import { StudyTemplateResultPrecisionListViewModel } from '../../view-models/study-template-result-precision-list-view-model';
import { StudyTemplateResultPrecisionItemViewModel } from '../../view-models/study-template-result-precsion-item-view-model';

@Component({
  selector: 'ae-lims-study-template-result-precision-list',
  templateUrl: './study-template-result-precision-list.component.html',
  styleUrls: ['./study-template-result-precision-list.component.scss'],
})
export class StudyTemplateResultPrecisionListComponent extends AeBaseComponent {
  @Input() viewModel: StudyTemplateResultPrecisionListViewModel =
    new StudyTemplateResultPrecisionListViewModel();
  @Input() formMode: AeFormMode = AeFormMode.View;

  constructor(
    private readonly dialogService: DialogService,
    private readonly cdr: ChangeDetectorRef
  ) {
    super();
  }

  get canAdd(): boolean {
    return this.formMode !== AeFormMode.View;
  }

  async add(): Promise<void> {
    await this.viewModel.add(this.dialogService);
    this.cdr.markForCheck();
  }

  delete(precision: StudyTemplateResultPrecisionItemViewModel): void {
    if (!precision) {
      return;
    }
    this.viewModel.delete(precision);
    this.cdr.markForCheck();
  }
}
