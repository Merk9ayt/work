const nxPreset = require('@nrwl/jest/preset').default;

module.exports = {
  ...nxPreset,
  snapshotFormat: { escapeString: false, printBasicPrototype: false },
};
