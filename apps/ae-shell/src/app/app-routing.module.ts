import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AeAuthenticationGuard, SigninOidcComponent } from '@ae-labs/auth';
import { LayoutComponent } from './layout/components/layout/layout.component';

export const appRoutes: Routes = [
  {
    path: 'signin-oidc',
    component: SigninOidcComponent,
  },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AeAuthenticationGuard],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      onSameUrlNavigation: 'reload',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
