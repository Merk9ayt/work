import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {
  APP_INITIALIZER,
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf,
} from '@angular/core';
import { AuthConfig, OAuthModule, OAuthStorage } from 'angular-oauth2-oidc';
import { SigninOidcComponent } from './components/signin-oidc.component';
import { authAppInitializerFactory } from './helpers/auth-app-initializer.factory';
import { authStorageFactory } from './helpers/auth-storage.factory';
import { AeAuthenticationService } from './services/ae-authentication.service';
import { AeUserService } from './services/ae-user.service';

@NgModule({
  declarations: [SigninOidcComponent],
  exports: [SigninOidcComponent],
  imports: [CommonModule, HttpClientModule, OAuthModule.forRoot()],
  providers: [AeAuthenticationService, AeUserService],
})
export class AeAuthModule {
  static forRoot(configuration: AuthConfig): ModuleWithProviders<AeAuthModule> {
    return {
      ngModule: AeAuthModule,
      providers: [
        {
          provide: APP_INITIALIZER,
          useFactory: authAppInitializerFactory,
          deps: [AeAuthenticationService, AeUserService],
          multi: true,
        },
        { provide: AuthConfig, useValue: configuration },
        { provide: OAuthStorage, useFactory: authStorageFactory },
      ],
    };
  }

  constructor(@Optional() @SkipSelf() parentModule: AeAuthModule) {
    if (parentModule) {
      throw new Error(
        'AeAuthModule is already loaded. Import it in the AppModule only.'
      );
    }
  }
}
