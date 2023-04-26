export interface OAuthUserClaims {
  nbf?: number;
  exp?: number;
  iss?: string;
  aud?: string;
  nonce?: string;
  iat?: number;
  at_hash?: string;
  s_hash?: string;
  sid?: string;
  sub: string;
  auth_time?: number;
  idp?: string;
  given_name?: string;
  family_name: string;
  name: string;
  tid?: string;
  tenant?: string;
  role: string;
  userType: string;
  preferred_username?: string;
  amr?: string[];
  dateFormat: string;
  timeFormat: string;
  zoneinfo: string;
  locale: string;
}
