import { SampleSourceModel } from '../../sample-sources/models/sample-source.model';
import { SpecimenModel } from '../../specimens/models/specimen.model';

export interface StudyOrderTemplateSampleSourceModel {
  sampleSource: SampleSourceModel;

  specimen: SpecimenModel;

  canCombineSample: boolean;
}
