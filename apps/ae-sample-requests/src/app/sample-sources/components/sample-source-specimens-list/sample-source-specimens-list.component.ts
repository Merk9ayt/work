import { Component, Input } from '@angular/core';
import { AeFormMode } from '@ae-labs/ui';
import { SampleSourceSpecimenModel } from '../../models/sample-source-specimen.model';

@Component({
  selector: 'ae-sr-sample-source-specimens-list',
  templateUrl: './sample-source-specimens-list.component.html',
  styleUrls: ['./sample-source-specimens-list.component.scss'],
})
export class SampleSourceSpecimensListComponent {
  @Input() items: SampleSourceSpecimenModel[] = [];

  @Input() formMode: AeFormMode = AeFormMode.View;

  get canAdd(): boolean {
    return this.formMode !== AeFormMode.View;
  }
}
