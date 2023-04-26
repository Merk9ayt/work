import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
} from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { AeBaseComponent, AeFormMode } from '@ae-labs/ui';
import { StudyOrderTemplateOrderDefinitionListViewModel } from '../../view-models/study-order-template-order-definition-list-view-model';
import { StudyOrderTemplateOrderDefinitionViewModel } from '../../view-models/study-order-template-order-definition-view-model';

@Component({
  selector: 'ae-lims-study-order-template-order-definition-list',
  templateUrl: './study-order-template-order-definition-list.component.html',
  styleUrls: ['./study-order-template-order-definition-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StudyOrderTemplateOrderDefinitionListComponent extends AeBaseComponent {
  @Input() viewModel: StudyOrderTemplateOrderDefinitionListViewModel =
    new StudyOrderTemplateOrderDefinitionListViewModel();
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

  delete(definition: StudyOrderTemplateOrderDefinitionViewModel): void {
    if (!definition) {
      return;
    }
    this.viewModel.delete(definition);
    this.cdr.markForCheck();
  }
}
