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
import { AeBaseComponent, AeFormMode } from '@ae-labs/ui';
import { StudyOrderTemplateResultViewModel } from '../../view-models/study-order-template-result-view-model';

@Component({
  selector: 'ae-lims-study-order-template-result-list-item',
  templateUrl: './study-order-template-result-list-item.component.html',
  styleUrls: ['./study-order-template-result-list-item.component.scss'],
})
export class StudyOrderTemplateResultListItemComponent extends AeBaseComponent {
  @Input() viewModel: StudyOrderTemplateResultViewModel =
    new StudyOrderTemplateResultViewModel();
  @Input() formMode: AeFormMode = AeFormMode.View;
  @Output() deleted = new EventEmitter<StudyOrderTemplateResultViewModel>();

  constructor(
    private readonly dialogService: DialogService,
    private readonly cdr: ChangeDetectorRef,
    @Inject(I18NEXT_SERVICE) private i18NextService: ITranslationService
  ) {
    super();
  }

  // get value(): string | undefined {
  //   return this.viewModel.data?.value === -1
  //     ? '-'
  //     : `${this.viewModel.data?.value} ${this.viewModel?.unit}`;
  // }
  get haveMin(): boolean {
    return this.viewModel.data.minPermissibleValue !== -1;
  }

  get haveMax(): boolean {
    return this.viewModel.data.maxPermissibleValue !== -1;
  }

  get havePrecision(): boolean {
    return this.viewModel.data.precision !== -1;
  }

  get canEdit(): boolean {
    return this.formMode !== AeFormMode.View;
  }

  get canDelete(): boolean {
    return this.formMode !== AeFormMode.View;
  }

  // async edit(): Promise<void> {
  //   const ref = this.dialogService.open(
  //     StudyTemplateResultPrecisionEditComponent,
  //     {
  //       data: this.viewModel,
  //       header: 'Редактирование метрологии',
  //       draggable: true,
  //     }
  //   );
  //
  //   const resultDefinition = await firstValueFrom(ref.onClose);
  //   if (resultDefinition) {
  //     this.cdr.detectChanges();
  //     this.viewModel.updated = true;
  //   }
  // }

  delete(): void {
    this.deleted.emit(this.viewModel);
  }
}
