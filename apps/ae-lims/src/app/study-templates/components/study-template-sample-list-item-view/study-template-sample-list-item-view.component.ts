import {
  ChangeDetectionStrategy,
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
import { StudyTemplateSampleModel } from '../../models/study-template-sample.model';
import { StudyTemplateSampleViewModel } from '../../view-models/study-template-sample-view-model';
import { StudyTemplateSampleItemEditComponent } from '../study-template-sample-item-edit/study-template-sample-item-edit.component';

@Component({
  selector: 'ae-lims-study-template-sample-list-item-view',
  templateUrl: './study-template-sample-list-item-view.component.html',
  styleUrls: ['./study-template-sample-list-item-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StudyTemplateSampleListItemViewComponent extends AeBaseComponent {
  @Input() viewModel: StudyTemplateSampleViewModel =
    new StudyTemplateSampleViewModel();
  @Input() formMode: AeFormMode = AeFormMode.View;
  @Output() deleted = new EventEmitter<StudyTemplateSampleViewModel>();

  constructor(
    private readonly dialogService: DialogService,
    private readonly cdr: ChangeDetectorRef,
    @Inject(I18NEXT_SERVICE) private i18NextService: ITranslationService
  ) {
    super();
  }

  get canEdit(): boolean {
    return this.formMode !== AeFormMode.View;
  }

  get canDelete(): boolean {
    return this.formMode !== AeFormMode.View;
  }

  edit(): void {
    const ref = this.dialogService.open(StudyTemplateSampleItemEditComponent, {
      data: this.viewModel,
      header: 'Редактирование образца',
    });

    ref.onClose.subscribe((sample: StudyTemplateSampleModel) => {
      if (sample) {
        this.cdr.detectChanges();
      }
    });
  }

  delete(): void {
    this.deleted.emit(this.viewModel);
  }
}
