import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { firstValueFrom, Subject } from 'rxjs';
import { ComponentCanDeactivate } from '@ae-labs/core';

@Injectable()
export class PendingChangesGuard
  implements CanDeactivate<ComponentCanDeactivate>
{
  constructor(private readonly confirmationService: ConfirmationService) {}

  async canDeactivate(component: ComponentCanDeactivate): Promise<boolean> {
    if (component.canDeactivate()) {
      return true;
    }

    const result = new Subject<boolean>();
    this.confirmationService.confirm({
      message: 'Продолжить без сохранения данных?',
      header: 'Подтверждение',
      icon: 'ae-icon-exclamation-triangle',
      acceptLabel: 'Да',
      rejectLabel: 'Нет',
      accept: () => {
        result.next(true);
      },
      reject: () => {
        result.next(false);
      },
    });

    return firstValueFrom(result);
  }
}
