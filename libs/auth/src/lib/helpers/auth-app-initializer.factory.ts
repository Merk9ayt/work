import { AeAuthenticationService } from '../services/ae-authentication.service';
import { AeUserService } from '../services/ae-user.service';

export function authAppInitializerFactory(
  authService: AeAuthenticationService,
  userService: AeUserService
): () => Promise<boolean> {
  return async () => {
    await userService.init();
    return authService.runInitialLoginSequence();
  };
}
