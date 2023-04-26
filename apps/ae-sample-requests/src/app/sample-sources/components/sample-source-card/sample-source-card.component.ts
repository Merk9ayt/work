import { Component, Input } from '@angular/core';
import { AeBaseComponent } from '@ae-labs/ui';
import { SampleSourceModel } from '../../models/sample-source.model';

@Component({
  selector: 'ae-lims-sample-source-card',
  templateUrl: './sample-source-card.component.html',
  styleUrls: ['./sample-source-card.component.scss'],
})
export class SampleSourceCardComponent extends AeBaseComponent {
  @Input() sampleSource: SampleSourceModel = {
    specimens: [],
    name: '',
  };
}
