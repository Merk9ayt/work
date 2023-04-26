import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
} from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { AeBaseComponent, AeFormMode } from '@ae-labs/ui';
import { StudyTemplateSampleListViewModel } from '../../view-models/study-template-sample-list-view-model';
import { StudyTemplateSampleViewModel } from '../../view-models/study-template-sample-view-model';

@Component({
  selector: 'ae-lims-study-template-sample-list',
  templateUrl: './study-template-sample-list.component.html',
  styleUrls: ['./study-template-sample-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StudyTemplateSampleListComponent extends AeBaseComponent {
  @Input() viewModel: StudyTemplateSampleListViewModel =
    new StudyTemplateSampleListViewModel();

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

  delete(sample: StudyTemplateSampleViewModel): void {
    this.viewModel?.delete(sample);
    this.cdr.markForCheck();
  }
}
