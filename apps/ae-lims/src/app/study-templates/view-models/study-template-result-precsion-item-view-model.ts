import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DialogService } from 'primeng/dynamicdialog';
import { firstValueFrom } from 'rxjs';
import { ViewModelBase } from '@ae-labs/ui';
import { StudyTemplateResultPrecisionModel } from '../models/study-template-result-precision.model';

export class StudyTemplateResultPrecisionItemViewModel extends ViewModelBase {
  constructor(data?: StudyTemplateResultPrecisionModel) {
    super();
    if (data) {
      this.data = data;

      this.dataForm.patchValue({ precisionValue: this.data.value });
      this.dataForm.patchValue({ minResultValue: this.data.minValue });
      this.dataForm.patchValue({ maxResultValue: this.data.maxValue });
      this.unitId = this.data.unit.id;
      this.unit = this.data.unit.name;
      this.precisionId = this.data.precision.id;
      this.precisionName = this.data.precision.name;
    }
  }

  data: StudyTemplateResultPrecisionModel = {
    maxValue: 0,
    minValue: 0,
    precision: {
      id: '',
      name: '',
    },
    unit: {
      id: '',
      name: '',
    },
    value: 0,
  };

  unitId?: string | null;
  unit = '';
  precisionId?: string | null;
  precisionName = '';

  dataForm = new FormGroup({
    precisionValue: new FormControl(0, [Validators.required]),
    maxResultValue: new FormControl(0, [Validators.required]),
    minResultValue: new FormControl(0, [Validators.required]),
  });

  get canOk(): boolean {
    return !!this.unitId && !!this.precisionId && this.dataForm.valid;
  }

  ok(): void {
    if (!this.canOk || !this.data) {
      return;
    }

    this.data.precision.id = this.precisionId ?? '';
    this.data.precision.name = this.precisionName ?? '';
    this.data.unit.id = this.unitId ?? '';
    this.data.unit.name = this.unit;
    this.data.value = this.dataForm.controls['precisionValue'].value ?? 0;
    this.data.minValue = this.dataForm.controls['minResultValue'].value ?? 0;
    this.data.maxValue = this.dataForm.controls['maxResultValue'].value ?? 0;
    this.updated = true;
  }

  async selectPrecision(dialogService: DialogService): Promise<void> {
    const subjectModule = await import('subject/SubjectSelect');
    const ref = dialogService.open(subjectModule.SubjectSelectComponent, {
      data: {
        subjectType: '00000000-0001-0005-0001-000000000003',
      },
      width: '50rem',
      height: '80%',
      styleClass: 'overflow-y-hidden',
      header: 'Выбор метрологии',
      draggable: true,
    });

    const subject = await firstValueFrom(ref.onClose);
    if (subject) {
      this.precisionId = subject.id;
      this.precisionName = subject.name;
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
      height: '80%',
    });

    const subject = await firstValueFrom(ref.onClose);
    if (subject) {
      this.unitId = subject.id;
      this.unit = subject.name;
    }
  }
}
