import {
  Component,
  HostListener,
  Inject,
  OnInit,
  Optional,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AE_FEATURE_NAME, ComponentCanDeactivate } from '@ae-labs/core';
import { MessageBus } from '@ae-labs/messaging';
import { AeBaseComponent } from '../shared';
import { AeFormMode } from './models/ae-form-mode';

@Component({
  selector: 'ae-ui-form-base',
  template: '',
})
export abstract class AeFormBaseComponent
  extends AeBaseComponent
  implements OnInit, ComponentCanDeactivate
{
  formMode = AeFormMode.View;

  get isValid(): boolean {
    return true;
  }

  get isDirty(): boolean {
    return false;
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  clearDirty(): void {}

  get BaseViewUrl(): string | undefined {
    return undefined;
  }

  get BaseViewQueryParameters(): object | undefined {
    return undefined;
  }

  get ViewUrl(): string | undefined {
    return undefined;
  }

  get ViewQueryParameters(): object | undefined {
    return undefined;
  }

  get UpdateUrl(): string | undefined {
    return undefined;
  }

  get UpdateQueryParameters(): object | undefined {
    return undefined;
  }

  get CreateUrl(): string | undefined {
    return undefined;
  }

  get CreateQueryParameters(): object | undefined {
    return undefined;
  }

  get createdEventData(): unknown | undefined {
    return undefined;
  }

  get updatedEventData(): unknown | undefined {
    return undefined;
  }

  get deleteEventData(): unknown | undefined {
    return undefined;
  }

  constructor(
    protected readonly router: Router,
    protected readonly activatedRoute: ActivatedRoute,
    protected readonly messageBus: MessageBus,
    @Inject(AE_FEATURE_NAME) @Optional() protected readonly featureName: string
  ) {
    super();
  }

  ngOnInit(): void {
    switch (
      this.activatedRoute.snapshot.url[
        this.activatedRoute.snapshot.url.length - 1
      ].path
    ) {
      case AeFormMode.Create:
        this.formMode = AeFormMode.Create;
        break;
      case AeFormMode.Update:
        this.formMode = AeFormMode.Update;
        break;
      case AeFormMode.View:
        this.formMode = AeFormMode.View;
        break;
    }
  }

  submit(navigateIfSuccess: boolean): void {
    if (!this.isValid) {
      return;
    }
    if (this.formMode === AeFormMode.Update) {
      this.patchAction()?.subscribe(() => {
        if (this.featureName) {
          this.messageBus.emit(
            `${this.featureName}:${AeFormMode.Update}`,
            this.updatedEventData
          );
        }
        this.afterSubmit(navigateIfSuccess);
      });
    }

    if (this.formMode === AeFormMode.Create) {
      this.createAction()?.subscribe(() => {
        if (this.featureName) {
          this.messageBus.emit(
            `${this.featureName}:${AeFormMode.Create}`,
            this.createdEventData
          );
        }
        this.afterSubmit(navigateIfSuccess);
      });
    }
  }

  delete(): void {
    this.createAction()?.subscribe(() => {
      if (this.featureName) {
        this.messageBus.emit(
          `${this.featureName}:${AeFormMode.Delete}`,
          this.deleteEventData
        );
      }
    });
  }

  protected afterSubmit(navigateIfSuccess: boolean): void {
    this.clearDirty();
    if (navigateIfSuccess) {
      this.toView();
      return;
    }
    this.toEdit();
  }

  toBaseView(): void {
    if (this.BaseViewUrl) {
      this.router.navigate([this.BaseViewUrl], {
        queryParams: this.BaseViewQueryParameters,
      });
    }
  }

  toView(): void {
    if (this.ViewUrl) {
      this.router.navigate([this.ViewUrl], {
        queryParams: this.ViewQueryParameters,
      });
    }
  }

  toEdit(): void {
    if (this.UpdateUrl) {
      this.router.navigate([this.UpdateUrl], {
        queryParams: this.UpdateQueryParameters,
      });
    }
  }

  toCreate(): void {
    if (this.CreateUrl) {
      this.router.navigate([this.CreateUrl], {
        queryParams: this.CreateQueryParameters,
      });
    }
  }

  protected patchAction(): Observable<void> | undefined {
    return undefined;
  }

  protected createAction(): Observable<void> | undefined {
    return undefined;
  }

  protected deleteAction(): Observable<void> | undefined {
    return undefined;
  }

  @HostListener('window:beforeunload')
  canDeactivate(): boolean {
    return !this.isDirty && this.isValid;
  }
}
