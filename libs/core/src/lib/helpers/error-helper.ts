import { ITranslationService } from 'angular-i18next';
import { Message } from 'primeng/api';
import { Error } from '../models/error';

export class ErrorHelper {
  static CommonErrorContent: Message = {
    severity: 'error',
  };

  static isAeError(error: any): boolean {
    if (<Error>error?.titleTextKey == null && <Error>error?.title == null) {
      return false;
    }

    return true;
  }

  static mapToErrorToMessage(
    error: Error,
    translationService?: ITranslationService
  ): Message {
    return {
      ...ErrorHelper.CommonErrorContent,
      summary:
        (error.titleKey && translationService
          ? translationService.t(error.titleKey)
          : error.title) ?? undefined,
      detail:
        (error.descriptionKey && translationService
          ? translationService.t(error.descriptionKey)
          : error.description) ?? undefined,
    };
  }
}
