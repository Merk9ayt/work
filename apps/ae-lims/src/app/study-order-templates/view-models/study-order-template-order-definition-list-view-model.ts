import { DialogService } from 'primeng/dynamicdialog';
import { ViewModelBase } from '@ae-labs/ui';
import { StudyOrderTemplateOrderDefinitionModel } from '../models/study-order-template-order-definition.model';
import { StudyOrderTemplateOrderDefinitionViewModel } from './study-order-template-order-definition-view-model';

export class StudyOrderTemplateOrderDefinitionListViewModel extends ViewModelBase {
  constructor(data?: StudyOrderTemplateOrderDefinitionModel[]) {
    super();
    if (data) {
      this.items = data.map(
        r => new StudyOrderTemplateOrderDefinitionViewModel(r)
      );
    }
  }

  items: StudyOrderTemplateOrderDefinitionViewModel[] = [];

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

  delete(item: StudyOrderTemplateOrderDefinitionViewModel): void {
    if (!item) {
      return;
    }
    this.items = this.items.filter(s => s !== item);

    this.updated = true;
  }
}
