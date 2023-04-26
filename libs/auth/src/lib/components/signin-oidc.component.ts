import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'ae-signin-oidc',
  template: '',
})
export class SigninOidcComponent implements OnInit {
  constructor(
    private readonly router: Router,
    private readonly oAuthService: OAuthService
  ) {}

  public async ngOnInit(): Promise<void> {
    console.log('SigninOidcComponent component');
    if (this.oAuthService.state) {
      await this.router.navigate([this.oAuthService.state]);
    }
  }
}
