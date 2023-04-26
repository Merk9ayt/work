import { CommonModule } from '@angular/common';
import {
  APP_INITIALIZER,
  LOCALE_ID,
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf,
} from '@angular/core';
import {
  I18NEXT_SERVICE,
  I18NextModule,
  ITranslationService,
} from 'angular-i18next';
import i18nextHttpBackend from 'i18next-http-backend';
import { resourceUrl } from '@ae-labs/core';

function i18nextInitialize(i18next: ITranslationService) {
  return () =>
    i18next.use(i18nextHttpBackend).init({
      supportedLngs: ['ru', 'en'],
      lng: 'ru',
      fallbackLng: 'ru',
      debug: true,
      returnEmptyString: false,
      ns: ['common', 'validations', 'errors'],
      backend: {
        loadPath: resourceUrl('/locales/{{lng}}/{{ns}}.json'),
      },
    });
}

function localeIdFactory(i18next: ITranslationService): string {
  return i18next.language;
}

@NgModule({
  imports: [CommonModule, I18NextModule.forRoot()],
})
export class AeI18nModule {
  static forRoot(): ModuleWithProviders<AeI18nModule> {
    return {
      ngModule: AeI18nModule,
      providers: [
        {
          provide: APP_INITIALIZER,
          useFactory: i18nextInitialize,
          deps: [I18NEXT_SERVICE],
          multi: true,
        },
        {
          provide: LOCALE_ID,
          deps: [I18NEXT_SERVICE],
          useFactory: localeIdFactory,
        },
      ],
    };
  }

  constructor(@Optional() @SkipSelf() parentModule?: AeI18nModule) {
    if (parentModule) {
      throw new Error(
        'AeI18nModule has already been loaded. Please import it only once in the application module.'
      );
    }
  }
}
