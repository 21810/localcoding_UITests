// TO USE Safari
// Run: selenium-standalone start
// Then: npm run test:safari

const hooks = require('./config/hooks.conf');
const base = require('./config/base.conf');

exports.config = {
  runner: 'local',

  maxInstances: 1,
  capabilities: [
    {
      maxInstances: 1,
      browserName: 'safari'
    }
  ],

  services: ['selenium-standalone'],

  // options
  safaridriverArgs: ['-p 4444'], // use the specified port. Default is 4444
  safaridriverLogs: './',

  ...base,
  ...hooks
};
