// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

// adapté pour cucumber : https://www.npmjs.com/package/protractor-cucumber-framework
exports.config = {
  allScriptsTimeout: 11000,
  capabilities: {
    'browserName': 'chrome',
    // Run tests in a headless Chrome
    // https://github.com/angular/protractor/blob/master/docs/browser-setup.md#using-headless-chrome
    chromeOptions: {
      args: [
        // IMPORTANT: Required flag for running Chrome in unprivileged Docker,
        // see https://github.com/karma-runner/karma-chrome-launcher/issues/125#issuecomment-312668593
        '--no-sandbox',
        '--headless',
        '--disable-gpu'
      ]
    }
  },
  directConnect: true,
  baseUrl: 'http://localhost:49152/',
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  /**
   * Config type
   */
  onPrepare() {
    require('ts-node').register({
      project: 'e2e/tsconfig.e2e.json'
    });
    // jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  },
  // require feature files
  specs: [
    'e2e/features/**/*.feature' // accepts a glob
  ],

  /**
   * Options de cucumber.js
   * @see
   */
  cucumberOpts: {
    strict: true,
    'no-colors': true,
    format: ['progress', 'summary', 'json:dist/cucumber_report.json'],
    // require step definitions
    require: [
      'e2e/step/definitions/**/*.steps.ts' // accepts a glob
    ]
  }
};
