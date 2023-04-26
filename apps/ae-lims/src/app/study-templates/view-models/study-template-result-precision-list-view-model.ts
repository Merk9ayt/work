import { DialogService } from 'primeng/dynamicdialog';
import { firstValueFrom } from 'rxjs';
import { ViewModelBase } from '@ae-labs/ui';
import { StudyTemplateResultPrecisionEditComponent } from '../components/study-template-result-precision-edit/study-template-result-precision-edit.component';
import { StudyTemplateResultPrecisionModel } from '../models/study-template-result-precision.model';
import { StudyTemplateResultPrecisionItemViewModel } from './study-template-result-precsion-item-view-model';

export class StudyTemplateResultPrecisionListViewModel extends ViewModelBase {
  constructor(data?: StudyTemplateResultPrecisionModel[]) {
    super();
    if (data) {
      this.items = data.map(
        p => new StudyTemplateResultPrecisionItemViewModel(p)
      );
    }
  }

  items: StudyTemplateResultPrecisionItemViewModel[] = [];

  get precisions(): StudyTemplateResultPrecisionItemViewModel[] {
    return [...this.items].sort(
      (a, b) => (a.data?.minValue ?? 0) - (b.data?.minValue ?? 0)
    );
  }

  override get updated(): boolean {
    return super.updated || !!this.items.find(d => d.updated);
  }

  override set updated(value: boolean) {
    super.updated = value;
  }

  async add(dialogService: DialogService): Promise<void> {
    const ref = dialogService.open(StudyTemplateResultPrecisionEditComponent, {
      data: new StudyTemplateResultPrecisionItemViewModel(),
      header: 'Создание метрологии',
      draggable: true,
    });

    const precision = await firstValueFrom(ref.onClose);
    if (precision) {
      this.items.push(precision);
    }

    this.updated = true;
  }

  delete(precision: StudyTemplateResultPrecisionItemViewModel): void {
    if (!precision) {
      return;
    }
    this.items = this.items.filter(s => s !== precision);

    this.updated = true;
  }
}
