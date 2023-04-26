import { DialogService } from 'primeng/dynamicdialog';
import { ViewModelBase } from '@ae-labs/ui';
import { StudyOrderTemplateSampleSourceModel } from '../models/study-order-template-sample-source.model';
import { StudyOrderTemplateSampleSourceViewModel } from './study-order-template-sample-source-view-model';

export class StudyOrderTemplateSampleSourceListViewModel extends ViewModelBase {
  constructor(data?: StudyOrderTemplateSampleSourceModel[]) {
    super();
    if (data) {
      this.items = data.map(
        r => new StudyOrderTemplateSampleSourceViewModel(r)
      );
    }
  }

  items!: StudyOrderTemplateSampleSourceViewModel[];

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

  delete(item: StudyOrderTemplateSampleSourceViewModel): void {
    if (!item) {
      return;
    }
    this.items = this.items.filter(s => s !== item);

    this.updated = true;
  }
}
