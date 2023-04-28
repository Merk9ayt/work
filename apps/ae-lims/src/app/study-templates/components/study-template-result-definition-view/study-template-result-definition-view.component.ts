import { Component, OnInit } from '@angular/core';
import { I18NEXT_NAMESPACE } from 'angular-i18next';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AeBaseComponent } from '@ae-labs/ui';
import { StudyTemplateResultDefinitionViewModel } from '../../view-models/study-template-result-definition-view-model';

@Component({
  selector: 'ae-lims-study-template-result-definition-view',
  templateUrl: './study-template-result-definition-view.component.html',
  styleUrls: ['./study-template-result-definition-view.component.scss'],
  providers: [
    {
      provide: I18NEXT_NAMESPACE,
      useValue: 'subject',
    },
  ],

})
export class StudyTemplateResultDefinitionViewComponent
  extends AeBaseComponent
  implements OnInit
{
  constructor(
    private readonly ref: DynamicDialogRef,
    private readonly config: DynamicDialogConfig
  ) {
    super();
  }

  viewModel: StudyTemplateResultDefinitionViewModel =
    new StudyTemplateResultDefinitionViewModel();

  ngOnInit(): void {
    this.viewModel = this.config.data;
  }

  cancel(): void {
    this.ref.close();
  }
}
