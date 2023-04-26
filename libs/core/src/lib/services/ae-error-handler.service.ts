import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Inject, Injectable } from '@angular/core';
import { I18NEXT_SERVICE, ITranslationService } from 'angular-i18next';
import { Message, MessageService } from 'primeng/api';
import { ErrorHelper } from '../helpers/error-helper';
import { Error } from '../models/error';

/**
 Provides a hook for centralized exception handling.
 */
@Injectable({
  providedIn: 'root',
})
export class AeErrorHandlerService implements ErrorHandler {
  constructor(
    private readonly messageService: MessageService,
    @Inject(I18NEXT_SERVICE)
    private readonly translationService: ITranslationService
  ) {}

  /**
   * This method is called whenever an error is thrown somewhere in the application.
   * The error is passed as a parameter and can be processed further inside the method.
   *
   * @param error An error content
   */
  handleError(error: any): void {
    let errorMessage: Message = {};

    switch (error.status) {
      // 401: Unauthorized
      case 401:
        this.messageService.add({
          ...ErrorHelper.CommonErrorContent,
          summary:
            this.translationService.t('errors:unauthorized.title') ?? undefined,
          detail:
            this.translationService.t('errors:unauthorized.details') ??
            undefined,
        });
        break;

      // 403: Forbidden
      case 403:
        this.messageService.add({
          ...ErrorHelper.CommonErrorContent,
          summary:
            this.translationService.t('errors:forbidden.title') ?? undefined,
          detail:
            this.translationService.t('errors:forbidden.details') ?? undefined,
        });
        break;

      // 503: Service Unavailable
      case 503:
        this.messageService.add({
          ...ErrorHelper.CommonErrorContent,
          summary:
            this.translationService.t('errors:serviceunavailable.title') ??
            undefined,
          detail:
            this.translationService.t('errors:serviceunavailable.details') ??
            undefined,
        });
        break;

      // 502: Bad Gateway with custom error description (from another service)
      case 502:
        if (ErrorHelper.isAeError(error.error)) {
          errorMessage = ErrorHelper.mapToErrorToMessage(error.error);
        } else {
          this.messageService.add({
            ...ErrorHelper.CommonErrorContent,
            summary:
              this.translationService.t('errors:badgateway.title') ?? undefined,
            detail:
              this.translationService.t('errors:badgateway.details') ??
              undefined,
          });
        }
        break;

      default: {
        if (!(error instanceof HttpErrorResponse)) {
          errorMessage = {
            ...ErrorHelper.CommonErrorContent,
            summary:
              this.translationService.t('errors:unspecified.title') ??
              undefined,
            detail: error.message,
          };
        } else if (ErrorHelper.isAeError(error.error)) {
          errorMessage = ErrorHelper.mapToErrorToMessage(error.error);
        } else if (typeof error.error === 'string') {
          const parsedError = JSON.parse(error.error) as Error;
          errorMessage = ErrorHelper.mapToErrorToMessage(
            parsedError,
            this.translationService
          );
        } else {
          errorMessage = {
            ...ErrorHelper.CommonErrorContent,
            summary: error.statusText,
            detail: error.message,
          };
        }

        break;
      }
    }

    this.messageService.add(errorMessage);
    throw error;
  }
}
