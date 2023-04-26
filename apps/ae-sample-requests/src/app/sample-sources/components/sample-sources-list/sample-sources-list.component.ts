import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { SampleSourceModel } from '../../models/sample-source.model';

@Component({
  selector: 'ae-lims-sample-sources-list',
  templateUrl: './sample-sources-list.component.html',
  styleUrls: ['./sample-sources-list.component.scss'],
})
export class SampleSourcesListComponent {
  @Input() sampleSources$: Observable<SampleSourceModel[]> | undefined;
  @Output() sampleSourceSelected = new EventEmitter<SampleSourceModel>();
  @Output() sampleSourceCreate = new EventEmitter<SampleSourceModel>();

  selectedSampleSource?: SampleSourceModel;

  get canAdd(): boolean {
    return true;
  }

  onSelect(sampleSource: SampleSourceModel): void {
    this.sampleSourceSelected.emit(sampleSource);
  }

  add(): void {
    this.sampleSourceCreate.emit(this.selectedSampleSource);
  }
}
