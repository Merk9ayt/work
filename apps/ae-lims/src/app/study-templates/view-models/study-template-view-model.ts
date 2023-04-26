import { DocumentStatus } from '@ae-labs/core';
import { ViewModelBase } from '@ae-labs/ui';
import { StudyTemplateModel } from '../models/study-template.model';
import { StudyTemplateResultListViewModel } from './study-template-result-list-view-model';
import { StudyTemplateSampleListViewModel } from './study-template-sample-list-view-model';

export class StudyTemplateViewModel extends ViewModelBase {
  data: StudyTemplateModel = {
    id: '',
    parentId: '',
    code: '',
    name: '',
    results: [],
    samples: [],
    parameters: [],
    status: DocumentStatus.Outdated,
  };
  samplesViewModel: StudyTemplateSampleListViewModel =
    new StudyTemplateSampleListViewModel();
  resultsViewModel: StudyTemplateResultListViewModel =
    new StudyTemplateResultListViewModel();

  constructor(data?: StudyTemplateModel) {
    super();
    if (data) {
      this.data = data;
      this.samplesViewModel = new StudyTemplateSampleListViewModel(
        data.samples
      );
      this.resultsViewModel = new StudyTemplateResultListViewModel(
        data.results
      );
    }
  }
}
