import { SubjectModel } from '../models/subject.model';

export interface SubjectStateModel {
  SubjectList: SubjectModel[];
  SelectedSubject?: SubjectModel;
  SelectedId?: string;
  TypeId: string;
}
