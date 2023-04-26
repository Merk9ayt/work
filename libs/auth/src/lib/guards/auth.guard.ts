import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AeAuthenticationService } from '../services';

export const AeAuthenticationGuard: CanActivateFn = (route, state) => {
  const authService = inject(AeAuthenticationService);
  const isLoggedIn = authService.hasValidAccessToken();
  if (!isLoggedIn) {
    console.log('Guard calls login.');
    authService.login(state.url);
  }

  const permissions = route.data['permissions'];
  if (permissions && permissions.length !== 0) {
    //TODO: check user permissions
  }

  // logged in and has all required permissions
  return true;
};
