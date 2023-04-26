import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnInit, Optional,} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Store} from '@ngxs/store';
import {Observable, takeUntil} from 'rxjs';
import {AE_FEATURE_NAME, toPatchOperation} from '@ae-labs/core';
import {MessageBus} from "@ae-labs/messaging";
import {SubjectDatasourceService} from "../../services/subject-datasource.service";
import {CreateSubject, UpdateSubject} from "../../store/subject-state.actions";
import {SubjectState} from "../../store/subject.state";
import {SubjectBaseFormComponent} from "../subject-base-form.component";


@Component({
  selector: 'ae-subject-details-edit',
  templateUrl: './subject-details-edit.component.html',
  styleUrls: ['./subject-details-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubjectDetailsEditComponent
  extends SubjectBaseFormComponent
  implements OnInit {
  baseDataForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    description: new FormControl(),
  });

  constructor(
    router: Router,
    activatedRoute: ActivatedRoute,
    messageBus: MessageBus,
    @Inject(AE_FEATURE_NAME) @Optional() featureName: string,
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
        this.id = x?.id ?? '';
        this.baseDataForm.patchValue({name: x?.name});
        this.baseDataForm.patchValue({description: x?.description});
        this.cdr.detectChanges();
      });
  }

  override patchAction(): Observable<void> {
    if (!this.id) {
      throw new Error(`Invalid id`);
    }

    const patch = toPatchOperation(this.baseDataForm);

    return this.store.dispatch(new UpdateSubject(this.id, this.typeId, patch));
  }

  override createAction(): Observable<void> {
    return this.store.dispatch(new CreateSubject({
      id: '',
      typeId: this.typeId,
      name: this.baseDataForm.controls['name'].value ?? '',
      description: this.baseDataForm.controls['description'].value,
    }));
  }

  override get isDirty(): boolean {
    return this.baseDataForm.dirty;
  }

  override clearDirty(): void {
    this.baseDataForm.markAsPristine();
  }

  override get isValid(): boolean {
    return this.baseDataForm.valid;
  }
}
