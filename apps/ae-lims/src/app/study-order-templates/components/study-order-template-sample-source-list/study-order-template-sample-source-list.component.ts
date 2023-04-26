import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
} from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { AeBaseComponent, AeFormMode } from '@ae-labs/ui';
import { StudyOrderTemplateSampleSourceListViewModel } from '../../view-models/study-order-template-sample-source-list-view-model';
import { StudyOrderTemplateSampleSourceViewModel } from '../../view-models/study-order-template-sample-source-view-model';

@Component({
  selector: 'ae-lims-study-order-template-sample-source-list',
  templateUrl: './study-order-template-sample-source-list.component.html',
  styleUrls: ['./study-order-template-sample-source-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StudyOrderTemplateSampleSourceListComponent extends AeBaseComponent {
  @Input() viewModel!: StudyOrderTemplateSampleSourceListViewModel;
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

  delete(definition: StudyOrderTemplateSampleSourceViewModel): void {
    if (!definition) {
      return;
    }
    this.viewModel.delete(definition);
    this.cdr.markForCheck();
  }
}
