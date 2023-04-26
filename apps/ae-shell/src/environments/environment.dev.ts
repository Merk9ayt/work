export const environment = {
  production: false,
  name: 'dev',
  identity: {
    issuer: 'http://10.100.79.41:8080/realms/ae-labs',
    redirectUri: `${window.location.origin}/`,
    clientId: 'ae_ui', // The "Auth Code + PKCE" client
    responseType: 'code',
    // silentRefreshRedirectUri: `${window.location.origin}/silent-refresh.html`,
    scope: 'openid profile email offline_access ae', // Ask offline_access to support refresh token refreshes
    // useSilentRefresh: true, // Needed for Code Flow to suggest using iframe-based refreshes
    showDebugInformation: true, // Also requires enabling "Verbose" level in devtools
    requireHttps: false,
    disableAtHashCheck: true,
    silentRefreshTimeout: 60000,
    sessionChecksEnabled: true,
    sessionCheckInterval: 60000,
    clearHashAfterLogin: false,
  },
};
