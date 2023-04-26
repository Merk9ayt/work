import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { AeUser } from '../models';
import { AeAuthenticationService } from './ae-authentication.service';

@Injectable({
  providedIn: 'root',
})
export class AeUserService {
  private readonly user$ = new ReplaySubject<AeUser | undefined>(1);

  constructor(private readonly authService: AeAuthenticationService) {
    this.authService.isAuthenticated$.subscribe(() => this.updateUserInfo());
  }

  init(): Promise<void> {
    this.updateUserInfo();
    return Promise.resolve();
  }

  public updateUserInfo(): void {
    const claims = this.authService.identityClaims;
    let user: AeUser | undefined = undefined;
    if (claims) {
      user = {
        displayName: claims.preferred_username ?? claims.name,
        firstName: claims.given_name ?? '',
        lastName: claims.family_name,
        userId: claims.sub,
        userName: claims.name,
      };
    }

    this.user$.next(user);
  }

  get currentUser$(): Observable<AeUser | undefined> {
    return this.user$;
  }
}
