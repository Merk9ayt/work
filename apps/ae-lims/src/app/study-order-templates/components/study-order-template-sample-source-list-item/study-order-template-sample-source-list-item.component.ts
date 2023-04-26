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
import { StudyOrderTemplateSampleSourceViewModel } from '../../view-models/study-order-template-sample-source-view-model';

@Component({
  selector: 'ae-lims-study-order-template-sample-source-list-item',
  templateUrl: './study-order-template-sample-source-list-item.component.html',
  styleUrls: ['./study-order-template-sample-source-list-item.component.scss'],
})
export class StudyOrderTemplateSampleSourceListItemComponent extends AeBaseComponent {
  @Input() viewModel: StudyOrderTemplateSampleSourceViewModel =
    new StudyOrderTemplateSampleSourceViewModel();
  @Input() formMode: AeFormMode = AeFormMode.View;
  @Output() deleted =
    new EventEmitter<StudyOrderTemplateSampleSourceViewModel>();

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
