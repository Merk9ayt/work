const {
  shareAll,
  withModuleFederationPlugin,
} = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  name: 'lims',

  exposes: {
    './StudyTemplates':
      './apps/ae-lims/src/app/study-templates/study-templates.module.ts',
    './StudyOrderTemplates':
      './apps/ae-lims/src/app/study-order-templates/study-order-templates.module.ts',
  },

  remotes: {
    subject: 'http://localhost:4204/remoteEntry.js',
  },
  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: 'auto',
    }),
  },
});
