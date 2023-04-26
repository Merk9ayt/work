import { Component, Input } from '@angular/core';
import { SampleSourceSpecimenModel } from '../../models/sample-source-specimen.model';

@Component({
  selector: 'ae-sr-sample-source-specimen-item-view',
  templateUrl: './sample-source-specimen-item-view.component.html',
  styleUrls: ['./sample-source-specimen-item-view.component.scss'],
})
export class SampleSourceSpecimenItemViewComponent {
  @Input() specimenItem: SampleSourceSpecimenModel = {
    name: '',
    specimenId: '',
  };
}
