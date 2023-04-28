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
import { StudyTemplateResultDefinitionModel } from '../../models/study-template-result-definition.model';
import { StudyTemplateResultDefinitionViewModel } from '../../view-models/study-template-result-definition-view-model';
import { StudyTemplateResultDefinitionEditComponent } from '../study-template-result-definition-edit/study-template-result-definition-edit.component';
import { StudyTemplateResultDefinitionViewComponent } from '../study-template-result-definition-view/study-template-result-definition-view.component';

@Component({
  selector: 'ae-lims-study-template-result-definition-list-item-view',
  templateUrl:
    './study-template-result-definition-list-item-view.component.html',
  styleUrls: [
    './study-template-result-definition-list-item-view.component.scss',
  ],
})
export class StudyTemplateResultDefinitionListItemViewComponent extends AeBaseComponent {
  @Input() viewModel: StudyTemplateResultDefinitionViewModel =
    new StudyTemplateResultDefinitionViewModel();
  @Input() formMode: AeFormMode = AeFormMode.View;
  @Output() deleted =
    new EventEmitter<StudyTemplateResultDefinitionViewModel>();

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

  get canView(): boolean {
    return this.formMode === AeFormMode.View;
  }

  edit(): void {
    const ref = this.dialogService.open(
      StudyTemplateResultDefinitionEditComponent,
      {
        data: this.viewModel,
        header: this.i18NextService.t('editResult'),
        width: '70%',
        height: '80%',
      }
    );

    ref.onClose.subscribe(
      (resultDefinition: StudyTemplateResultDefinitionModel) => {
        if (resultDefinition) {
          this.cdr.detectChanges();
        }
      }
    );
  }

  view(): void {
    const ref = this.dialogService.open(
      StudyTemplateResultDefinitionViewComponent,
      {
        data: this.viewModel,
        header: this.i18NextService.t('watchResult'),
        width: '70%',
        height: '80%',
      }
    );
    ref.onClose.subscribe(
      (resultDefinition: StudyTemplateResultDefinitionModel) => {
        if (resultDefinition) {
          this.cdr.detectChanges();
        }
      }
    );
  }

  delete(): void {
    this.deleted.emit(this.viewModel);
  }
}
