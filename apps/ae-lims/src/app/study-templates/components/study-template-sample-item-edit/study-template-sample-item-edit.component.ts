import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import {I18NEXT_NAMESPACE} from "angular-i18next";
import {
  DialogService,
  DynamicDialogConfig,
  DynamicDialogRef,
} from 'primeng/dynamicdialog';
import { AeBaseComponent } from '@ae-labs/ui';
import { StudyTemplateSampleViewModel } from '../../view-models/study-template-sample-view-model';

@Component({
  selector: 'ae-lims-sample-item-edit',
  templateUrl: './study-template-sample-item-edit.component.html',
  styleUrls: ['./study-template-sample-item-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: I18NEXT_NAMESPACE,
      useValue: 'lims',
    },
  ],
})
export class StudyTemplateSampleItemEditComponent
  extends AeBaseComponent
  implements OnInit
{
  constructor(
    private readonly ref: DynamicDialogRef,
    private readonly config: DynamicDialogConfig,
    private readonly cdr: ChangeDetectorRef,
    private readonly dialogService: DialogService
  ) {
    super();
  }

  viewModel: StudyTemplateSampleViewModel = new StudyTemplateSampleViewModel();

  ngOnInit(): void {
    this.viewModel = this.config.data;
    this.cdr.detectChanges();
  }

  get canOk(): boolean {
    return this.viewModel?.canOk ?? false;
  }

  ok(): void {
    this.viewModel?.ok();
    this.ref.close(this.viewModel);
  }

  cancel(): void {
    this.ref.close();
  }

  async selectSpecimen(): Promise<void> {
    this.viewModel.selectSpecimen(this.dialogService).then(() => {
      this.cdr.markForCheck();
    });
  }

  async selectUnit(): Promise<void> {
    this.viewModel?.selectUnit(this.dialogService).then(() => {
      this.cdr.detectChanges();
    });
  }
}
