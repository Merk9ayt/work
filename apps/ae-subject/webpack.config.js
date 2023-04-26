const {
  shareAll,
  withModuleFederationPlugin,
} = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  name: 'subject',

  exposes: {
    './Subject': './apps/ae-subject/src/app/subjects/subject.module.ts',
    './SubjectSelect':
      './apps/ae-subject/src/app/subjects/components/subject-select/subject-select.component.ts',
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: 'auto',
    }),
  },
});
