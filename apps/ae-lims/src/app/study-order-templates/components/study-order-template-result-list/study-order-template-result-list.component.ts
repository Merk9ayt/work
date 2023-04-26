import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
} from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { AeBaseComponent, AeFormMode } from '@ae-labs/ui';
import { StudyOrderTemplateResultListViewModel } from '../../view-models/study-order-template-result-list-view-model';
import { StudyOrderTemplateResultViewModel } from '../../view-models/study-order-template-result-view-model';

@Component({
  selector: 'ae-lims-study-order-template-result-list',
  templateUrl: './study-order-template-result-list.component.html',
  styleUrls: ['./study-order-template-result-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StudyOrderTemplateResultListComponent extends AeBaseComponent {
  @Input() viewModel!: StudyOrderTemplateResultListViewModel;
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

  delete(definition: StudyOrderTemplateResultViewModel): void {
    if (!definition) {
      return;
    }
    this.viewModel.delete(definition);
    this.cdr.markForCheck();
  }
}
