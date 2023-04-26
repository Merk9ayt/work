import { DialogService } from 'primeng/dynamicdialog';
import { firstValueFrom } from 'rxjs';
import { ViewModelBase } from '@ae-labs/ui';
import { StudyTemplateSampleItemEditComponent } from '../components/study-template-sample-item-edit/study-template-sample-item-edit.component';
import { StudyTemplateSampleModel } from '../models/study-template-sample.model';
import { StudyTemplateSampleViewModel } from './study-template-sample-view-model';

export class StudyTemplateSampleListViewModel extends ViewModelBase {
  constructor(data?: StudyTemplateSampleModel[]) {
    super();
    if (data) {
      this.items = data.map(s => new StudyTemplateSampleViewModel(s));
    }
  }

  items: StudyTemplateSampleViewModel[] = [];

  async add(dialogService: DialogService): Promise<void> {
    const ref = dialogService.open(StudyTemplateSampleItemEditComponent, {
      data: new StudyTemplateSampleViewModel(),
      header: 'Добавление образца',
      draggable: true,
    });

    const sample = await firstValueFrom(ref.onClose);
    if (sample) {
      this.items.push(sample);
      this.items = [...this.items];
    }
    this.updated = true;
  }

  delete(sample: StudyTemplateSampleViewModel): void {
    if (!sample) {
      return;
    }
    this.items = this.items.filter(s => s !== sample);

    this.updated = true;
  }
}
