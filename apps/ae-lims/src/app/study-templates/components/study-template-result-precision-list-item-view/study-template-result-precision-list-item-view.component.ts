import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Inject,
  Input,
  Output,
} from '@angular/core';
import { I18NEXT_SERVICE, ITranslationService } from 'angular-i18next';
import { DialogService } from 'primeng/dynamicdialog';
import { firstValueFrom } from 'rxjs';
import { AeBaseComponent, AeFormMode } from '@ae-labs/ui';
import { StudyTemplateResultPrecisionItemViewModel } from '../../view-models/study-template-result-precsion-item-view-model';
import { StudyTemplateResultPrecisionEditComponent } from '../study-template-result-precision-edit/study-template-result-precision-edit.component';

@Component({
  selector: 'ae-lims-study-template-result-precision-list-item-view',
  templateUrl:
    './study-template-result-precision-list-item-view.component.html',
  styleUrls: [
    './study-template-result-precision-list-item-view.component.scss',
  ],
})
export class StudyTemplateResultPrecisionListItemViewComponent extends AeBaseComponent {
  @Input() viewModel: StudyTemplateResultPrecisionItemViewModel =
    new StudyTemplateResultPrecisionItemViewModel();
  @Input() formMode: AeFormMode = AeFormMode.View;
  @Output() deleted =
    new EventEmitter<StudyTemplateResultPrecisionItemViewModel>();

  constructor(
    private readonly dialogService: DialogService,
    private readonly cdr: ChangeDetectorRef,
    @Inject(I18NEXT_SERVICE) private i18NextService: ITranslationService
  ) {
    super();
  }

  get value(): string | undefined {
    return this.viewModel.data?.value === -1
      ? '-'
      : `${this.viewModel.data?.value} ${this.viewModel?.unit}`;
  }

  get canEdit(): boolean {
    return this.formMode !== AeFormMode.View;
  }

  get canDelete(): boolean {
    return this.formMode !== AeFormMode.View;
  }

  async edit(): Promise<void> {
    const ref = this.dialogService.open(
      StudyTemplateResultPrecisionEditComponent,
      {
        data: this.viewModel,
        header: this.i18NextService.t('metrologyEdit'),
        draggable: true,
      }
    );

    const resultDefinition = await firstValueFrom(ref.onClose);
    if (resultDefinition) {
      this.cdr.detectChanges();
      this.viewModel.updated = true;
    }
  }

  delete(): void {
    this.deleted.emit(this.viewModel);
  }
}
