import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';
import { filter, ReplaySubject } from 'rxjs';
import { OAuthUserClaims } from '../models';

@Injectable({
  providedIn: 'root',
})
export class AeAuthenticationService {
  readonly isAuthenticated$ = new ReplaySubject<boolean>(1);

  constructor(
    private readonly oAuthService: OAuthService,
    private readonly router: Router
  ) {
    this.oAuthService.events.subscribe(_ => {
      this.isAuthenticated$.next(this.oAuthService.hasValidAccessToken());
    });
    this.isAuthenticated$.next(this.oAuthService.hasValidAccessToken());

    this.oAuthService.events
      .pipe(filter(e => ['token_received'].includes(e.type)))
      .subscribe(e => {
        return this.oAuthService.loadUserProfile();
      });

    this.oAuthService.events
      .pipe(
        filter(e => ['session_terminated', 'session_error'].includes(e.type))
      )
      .subscribe(e => this.login());

    // TODO: check is this cause a reason for invalid user token requests
    // this.oAuthService.setupAutomaticSilentRefresh();
  }

  async runInitialLoginSequence(): Promise<boolean> {
    const document = await this.oAuthService
      .loadDiscoveryDocument()
      .catch(() => {
        console.error('failed to load identity service configuration.');
        return false;
      });

    if (!document) {
      return false;
    }

    const wasLoggedIn =
      this.oAuthService.hasValidAccessToken() &&
      this.oAuthService.hasValidIdToken();
    if (wasLoggedIn) {
      console.log('User was logged in');
    }

    const loggedIn = await this.oAuthService
      .loadDiscoveryDocumentAndLogin()
      .catch(error => {
        // error from login library
        console.error(error);
        return false;
      });

    return loggedIn;
  }

  login(targetUrl?: string): void {
    this.oAuthService.initLoginFlow(targetUrl || this.router.url);
  }

  logout(): void {
    this.oAuthService.logOut();
  }

  hasValidAccessToken(): boolean {
    return this.oAuthService.hasValidAccessToken();
  }

  get identityClaims(): OAuthUserClaims {
    return this.oAuthService.getIdentityClaims() as OAuthUserClaims;
  }
}
