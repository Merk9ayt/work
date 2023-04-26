import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { PrimeNGConfig } from 'primeng/api';
import { takeUntil } from 'rxjs';
import { AeAuthenticationService } from '@ae-labs/auth';
import {
  ApplicationDefinition,
  ConfigurationState,
} from '@ae-labs/configuration';
import { AeBaseComponent } from '@ae-labs/ui';
import { buildRoutes } from './utils/routes-builder';

@Component({
  selector: 'ae-shell-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent extends AeBaseComponent implements OnInit {
  initialized = false;

  constructor(
    private readonly primengConfig: PrimeNGConfig,
    private readonly router: Router,
    private readonly store: Store,
    private readonly authService: AeAuthenticationService
  ) {
    super();
  }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.store
      .select(ConfigurationState.applications)
      .pipe(takeUntil(this.destroyed$))
      .subscribe(apps => {
        this.generateAppRoutes(apps);
      });

    this.authService.isAuthenticated$.subscribe(
      res => (this.initialized = res)
    );
  }

  private generateAppRoutes(apps: ApplicationDefinition[]): void {
    const routes = buildRoutes(apps);
    this.router.resetConfig(routes);
    this.router.config.push();
  }
}
