import { SampleSourceModel } from '../models/sample-source.model';

export interface SampleSourcesStateModel {
  SampleSourcesList: SampleSourceModel[];
  SelectedSampleSource?: SampleSourceModel;
  SelectedId?: string;
}
