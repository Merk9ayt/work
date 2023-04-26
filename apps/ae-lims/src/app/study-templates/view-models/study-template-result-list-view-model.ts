import { DialogService } from 'primeng/dynamicdialog';
import { firstValueFrom } from 'rxjs';
import { ViewModelBase } from '@ae-labs/ui';
import { StudyTemplateResultDefinitionEditComponent } from '../components/study-template-result-definition-edit/study-template-result-definition-edit.component';
import { StudyTemplateResultDefinitionModel } from '../models/study-template-result-definition.model';
import { StudyTemplateResultDefinitionViewModel } from './study-template-result-definition-view-model';

export class StudyTemplateResultListViewModel extends ViewModelBase {
  constructor(data?: StudyTemplateResultDefinitionModel[]) {
    super();
    if (data) {
      this.items = data.map(r => new StudyTemplateResultDefinitionViewModel(r));
    }
  }

  items: StudyTemplateResultDefinitionViewModel[] = [];

  override get updated(): boolean {
    return super.updated || !!this.items.find(r => r.updated);
  }

  override set updated(value: boolean) {
    super.updated = value;
  }

  async add(dialogService: DialogService): Promise<void> {
    const ref = dialogService.open(StudyTemplateResultDefinitionEditComponent, {
      data: new StudyTemplateResultDefinitionViewModel(),
      header: 'Добавление результата',
    });
    const result = await firstValueFrom(ref.onClose);
    if (result) {
      this.items.push(result);
      this.items = [...this.items];
    }

    this.updated = true;
  }

  delete(item: StudyTemplateResultDefinitionViewModel): void {
    if (!item) {
      return;
    }
    this.items = this.items.filter(s => s !== item);

    this.updated = true;
  }
}
