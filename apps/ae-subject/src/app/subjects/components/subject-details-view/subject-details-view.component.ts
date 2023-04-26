import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnInit, Optional,} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Store} from '@ngxs/store';
import {takeUntil} from 'rxjs';
import {AE_FEATURE_NAME} from '@ae-labs/core';
import {MessageBus} from "@ae-labs/messaging";
import {SubjectModel} from "../../models/subject.model";
import {SubjectDatasourceService} from "../../services/subject-datasource.service";
import {DeleteSubject} from "../../store/subject-state.actions";
import {SubjectState} from "../../store/subject.state";
import {SubjectBaseFormComponent} from "../subject-base-form.component";

@Component({
  selector: 'ae-subject-details-view',
  templateUrl: './subject-details-view.component.html',
  styleUrls: ['./subject-details-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubjectDetailsViewComponent
  extends SubjectBaseFormComponent
  implements OnInit {
  template: SubjectModel | undefined;
  canEdit = true;
  canDelete = true;

  constructor(
    router: Router,
    activatedRoute: ActivatedRoute,
    messageBus: MessageBus,
    @Optional() @Inject(AE_FEATURE_NAME) featureName: string,
    store: Store,
    private readonly dataSourceService: SubjectDatasourceService,
    private readonly cdr: ChangeDetectorRef
  ) {
    super(router, activatedRoute, messageBus, featureName, store);
  }

  override ngOnInit(): void {
    super.ngOnInit();
    this.store
      .select(SubjectState.selectedSubject)
      .pipe(takeUntil(this.destroyed$))
      .subscribe(x => {
        this.template = x;
        this.cdr.detectChanges();
      });
  }

  override delete(): void {
    if (!this.id || !this.typeId) {
      return;
    }

    this.store.dispatch(new DeleteSubject(this.id, this.typeId)).subscribe(() => {
      this.toBaseView()
    });
  }
}
