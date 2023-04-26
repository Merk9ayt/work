import { ViewModelBase } from '@ae-labs/ui';
import { StudyOrderTemplateSampleSourceModel } from '../models/study-order-template-sample-source.model';

export class StudyOrderTemplateSampleSourceViewModel extends ViewModelBase {
  data!: StudyOrderTemplateSampleSourceModel;

  // parameterId?: string | null;
  // parameterName = '';
  //
  // specimenId?: string | null;
  // specimenName = '';
  //
  // unitId?: string | null;
  // unitName?: string | null = '';

  // precisionListViewModel: StudyTemplateResultPrecisionListViewModel =
  //   new StudyTemplateResultPrecisionListViewModel([]);

  // dataForm = new FormGroup({
  //   name: new FormControl('', [Validators.required]),
  //   description: new FormControl(''),
  //   defaultValue: new FormControl(''),
  //   maxValue: new FormControl(0, [Validators.required]),
  //   minValue: new FormControl(0, [Validators.required]),
  // });

  constructor(data?: StudyOrderTemplateSampleSourceModel) {
    super();
    if (data) {
      this.data = data;
      // this.precisionListViewModel =
      //   new StudyTemplateResultPrecisionListViewModel(data.precisions);
      // this.parameterId = data.parameter.id;
      // this.parameterName = data.parameter.name;
      // this.specimenId = data.specimen.id;
      // this.specimenName = data.specimen.name;
      // this.unitId = data.unit?.id;
      // this.unitName = data.unit?.name;
      //
      // this.dataForm.patchValue({ name: this.data.name });
      // this.dataForm.patchValue({ description: this.data.description });
      // // this.dataForm.patchValue({ defaultValue: this.data.defaultValue });
      // this.dataForm.patchValue({ minValue: this.data.minValue });
      // this.dataForm.patchValue({ maxValue: this.data.maxValue });
    }
  }

  get canOk(): boolean {
    return true;
    // (
    //   (!!this.unitId &&
    //     !!this.parameterId &&
    //     !!this.specimenId &&
    //     this.dataForm.valid) ||
    //   (this.precisionListViewModel.updated && this.dataForm.valid)
    // );
  }

  ok(): void {
    if (!this.canOk || !this.data) {
      return;
    }
    //
    // this.data.parameter.id = this.parameterId ?? '';
    // this.data.parameter.name = this.parameterName ?? '';
    //
    // this.data.specimen.id = this.specimenId ?? '';
    // this.data.specimen.name = this.specimenName ?? '';
    //
    // this.data.unit.id = this.unitId ?? '';
    // this.data.unit.name = this.unitName ?? '';
    //
    // this.updated = true;
    // this.data.name = this.dataForm.controls['name'].value ?? '';
    // this.data.description = this.dataForm.controls['description'].value;
    // this.data.minValue = this.dataForm.controls['minValue'].value;
    // this.data.maxValue = this.dataForm.controls['maxValue'].value;
  }

  // async selectResultType(dialogService: DialogService): Promise<void> {
  //   const subject = await import('subject/SubjectSelect');
  //   const ref = dialogService.open(subject.SubjectSelectComponent, {
  //     data: {
  //       subjectType: '00000000-0001-0005-0001-000000000001',
  //     },
  //     width: '50rem',
  //     height: '80%',
  //     styleClass: 'overflow-y-hidden',
  //     header: 'Выбор типа результата исследования',
  //     draggable: true,
  //   });
  //
  //   ref.onClose.subscribe((subject: any) => {
  //     if (subject) {
  //       this.parameterId = subject.id;
  //       this.parameterName = subject.name;
  //     }
  //   });
  // }

  // async selectUnit(dialogService: DialogService): Promise<void> {
  //   const subject = await import('subject/SubjectSelect');
  //   const ref = dialogService.open(subject.SubjectSelectComponent, {
  //     data: {
  //       subjectType: '00000000-0001-0005-0001-000000000002',
  //     },
  //     header: 'Выбор единицы измерения',
  //     draggable: true,
  //     width: '50rem',
  //   });
  //
  //   ref.onClose.subscribe((subject: any) => {
  //     if (subject) {
  //       this.unitId = subject.id;
  //       this.unitName = subject.name;
  //     }
  //   });
  // }

  // async selectSpecimen(dialogService: DialogService): Promise<void> {
  //   const subject = await import('subject/SubjectSelect');
  //   const ref = dialogService.open(subject.SubjectSelectComponent, {
  //     data: {
  //       subjectType: '00000000-0001-0005-0001-000000000000',
  //     },
  //     header: 'объект резульата',
  //     draggable: true,
  //     width: '50rem',
  //   });
  //
  //   ref.onClose.subscribe((subject: any) => {
  //     if (subject) {
  //       this.specimenId = subject.id;
  //       this.specimenName = subject.name;
  //     }
  //   });
  // }
}
