import {Component, Input} from '@angular/core';
import {AeBaseComponent} from '@ae-labs/ui';
import {SubjectModel} from "../../models/subject.model";

@Component({
  selector: 'ae-subject-card',
  templateUrl: './subject-card.component.html',
  styleUrls: ['./subject-card.component.scss'],
})
export class SubjectCardComponent extends AeBaseComponent {
  @Input() subject: SubjectModel = {
    id: '',
    typeId: '',
    name: '',
  };
}
