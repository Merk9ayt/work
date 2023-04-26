import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { Store } from '@ngxs/store';
import { MenuItem } from 'primeng/api';
import { takeUntil } from 'rxjs';
import { AeAuthenticationService, AeUserService } from '@ae-labs/auth';
import { AeBaseComponent } from '@ae-labs/ui';

@Component({
  selector: 'ae-user-profile-menu',
  templateUrl: './user-profile-menu.component.html',
  styleUrls: ['./user-profile-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserProfileMenuComponent
  extends AeBaseComponent
  implements OnInit
{
  userLabel?: string;
  userName?: string;
  userAvatar?: string;
  userLoggedIn = false;
  userActions: MenuItem[] = [];

  constructor(
    private readonly store: Store,
    private readonly userService: AeUserService,
    private readonly authService: AeAuthenticationService,
    private readonly cdr: ChangeDetectorRef
  ) {
    super();
  }

  ngOnInit(): void {
    this.userService.currentUser$
      .pipe(takeUntil(this.destroyed$))
      .subscribe(user => {
        if (!user) {
          this.userLoggedIn = false;
          this.userLabel = undefined;
          this.userName = undefined;
          this.userAvatar = undefined;
          this.userActions = [];
        } else {
          this.userLoggedIn = true;
          this.userLabel = `${user.firstName ? user.firstName[0] : ''}${
            user.lastName ? user.lastName[0] : ''
          }`;
          this.userName = user.displayName;
          this.userAvatar = undefined;
          this.userActions = [
            {
              label: 'Выход',
              icon: 'fa fa-arrow-right-from-bracket',
              command: () => this.authService.logout(),
            },
          ];
        }
        this.cdr.detectChanges();
      });
  }
}
