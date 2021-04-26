module.exports = {
  specs: [
    // './test/specs/**/*.js',
    './test/specs/regression/users/registration/userRegistration.spec.js'
  ],
  // exclude: [
  //     './test/specs/navigation.spec.js'
  // ],
  suites: {
    smoke: ['./test/specs/smoke/**/*.js'],
    challenges: ['./test/specs/regression/challenges/**/*spec.js'],
    navigation: ['./test/specs/regression/navigation/**/*spec.js'],
    users: ['./test/specs/regression/users/**/*spec.js']
  },

  logLevel: 'info',
  bail: 0,

  waitforTimeout: 10000,
  connectionRetryTimeout: 30000,
  connectionRetryCount: 1,

  baseUrl: 'https://stage.localcoding.us',

  framework: 'mocha',
  reporters: ['spec', ['allure', {
    outputDir: 'allure-results',
    disableWebdriverStepsReporting: false,
  }]],
  mochaOpts: {
    require: ['@babel/register'],
    ui: 'bdd',
    timeout: 60000
  }
};
