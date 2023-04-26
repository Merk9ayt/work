const {
  shareAll,
  withModuleFederationPlugin,
} = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  name: 'sample-requests',

  exposes: {
    './SampleRequests':
      './apps/ae-sample-requests/src/app/sample-requests/sample-requests.module.ts',
    './SampleSources':
      './apps/ae-sample-requests/src/app/sample-sources/sample-sources.module.ts',
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: 'auto',
    }),
  },
});
