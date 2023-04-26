import { DialogService } from 'primeng/dynamicdialog';
import { ViewModelBase } from '@ae-labs/ui';
import { StudyOrderTemplateResultModel } from '../models/study-order-template-result.model';
import { StudyOrderTemplateResultViewModel } from './study-order-template-result-view-model';

export class StudyOrderTemplateResultListViewModel extends ViewModelBase {
  constructor(data?: StudyOrderTemplateResultModel[]) {
    super();
    if (data) {
      this.items = data.map(r => new StudyOrderTemplateResultViewModel(r));
    }
  }

  items!: StudyOrderTemplateResultViewModel[];

  override get updated(): boolean {
    return super.updated || !!this.items.find(r => r.updated);
  }

  override set updated(value: boolean) {
    super.updated = value;
  }

  async add(dialogService: DialogService): Promise<void> {
    // const ref = dialogService.open(StudyTemplateResultDefinitionEditComponent, {
    //   data: new StudyTemplateResultDefinitionViewModel(),
    //   header: 'Добавление результата',
    // });
    // const result = await firstValueFrom(ref.onClose);
    // if (result) {
    //   this.items.push(result);
    //   this.items = [...this.items];
    // }

    this.updated = true;
  }

  delete(item: StudyOrderTemplateResultViewModel): void {
    if (!item) {
      return;
    }
    this.items = this.items.filter(s => s !== item);

    this.updated = true;
  }
}
