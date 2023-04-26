import { FormControl, FormGroup } from '@angular/forms';
import { DialogService } from 'primeng/dynamicdialog';
import { firstValueFrom } from 'rxjs';
import { ViewModelBase } from '@ae-labs/ui';
import { StudyTemplateSampleModel } from '../models/study-template-sample.model';

export class StudyTemplateSampleViewModel extends ViewModelBase {
  data!: StudyTemplateSampleModel;
  specimenId?: string | null;
  specimenName = '';

  unitId?: string | null;
  unitName = '';

  dataForm = new FormGroup({
    minVolume: new FormControl(),
    maxVolume: new FormControl(),
  });

  constructor(data?: StudyTemplateSampleModel) {
    super();
    if (data) {
      this.data = data;
      this.specimenId = data.specimen.id;
      this.specimenName = data.specimen.name;
      this.unitId = data.unit?.id;
      this.unitName = data.unit?.name ?? '';

      this.dataForm.patchValue({ minVolume: this.data.minVolume });
      this.dataForm.patchValue({ maxVolume: this.data.maxVolume });
    }
  }

  get canOk(): boolean {
    return !!this.unitId && !!this.specimenId;
  }

  ok(): void {
    if (!this.canOk || !this.data) {
      return;
    }

    this.data.specimen.id = this.specimenId ?? '';
    this.data.specimen.name = this.specimenName ?? '';

    if (this.unitId) {
      this.data.unit = { id: this.unitId, name: this.unitName };
    } else {
      this.data.unit = undefined;
    }

    this.data.minVolume = this.dataForm.controls['minVolume'].value;
    this.data.maxVolume = this.dataForm.controls['maxVolume'].value;

    this.updated = true;
  }

  async selectSpecimen(dialogService: DialogService): Promise<void> {
    const subjectModule = await import('subject/SubjectSelect');
    const ref = dialogService.open(subjectModule.SubjectSelectComponent, {
      data: {
        subjectType: '00000000-0001-0005-0001-000000000000',
      },
      width: '50rem',
      header: 'Выбор типа образца',
      draggable: true,
    });

    const subject = await firstValueFrom(ref.onClose);
    if (subject) {
      this.specimenId = subject.id;
      this.specimenName = subject.name;
    }
  }

  async selectUnit(dialogService: DialogService): Promise<void> {
    const subjectModule = await import('subject/SubjectSelect');
    const ref = dialogService.open(subjectModule.SubjectSelectComponent, {
      data: {
        subjectType: '00000000-0001-0005-0001-000000000002',
      },
      header: 'Выбор единицы измерения',
      draggable: true,
      width: '50rem',
    });

    const subject = await firstValueFrom(ref.onClose);
    if (subject) {
      this.unitId = subject.id;
      this.unitName = subject.name;
    }
  }
}
