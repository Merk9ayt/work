import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
} from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { AeBaseComponent, AeFormMode } from '@ae-labs/ui';
import { StudyTemplateResultDefinitionViewModel } from '../../view-models/study-template-result-definition-view-model';
import { StudyTemplateResultListViewModel } from '../../view-models/study-template-result-list-view-model';

@Component({
  selector: 'ae-lims-study-template-result-definition-list',
  templateUrl: './study-template-result-definition-list.component.html',
  styleUrls: ['./study-template-result-definition-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StudyTemplateResultDefinitionListComponent extends AeBaseComponent {
  @Input() viewModel: StudyTemplateResultListViewModel =
    new StudyTemplateResultListViewModel();
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

  delete(definition: StudyTemplateResultDefinitionViewModel): void {
    if (!definition) {
      return;
    }
    this.viewModel.delete(definition);
    this.cdr.markForCheck();
  }
}
