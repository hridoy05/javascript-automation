// An example configuration file.
exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  multiCapabilities: [{
    'browserName': 'firefox'
  }, {
    'browserName': 'chrome'
  }],

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',
  onPrepare: function() {
    var AllureReporter = require('jasmine-allure-reporter');
    jasmine.getEnv().addReporter(new AllureReporter({
      resultsDir: 'allure-results'
    }));
  },

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  suites: {
    dhaka: './Tests/dhaka.spec.js',
    chattogram: './Tests/chattogram.spec.js',
    sylhet: './Tests/sylhet.spec.js',
    khulna: './Tests/khulna.spec.js',
    barishal: './Tests/barishal.spec.js',
    rangpur: './Tests/rangpur.spec.js',
    rajshahi: './Tests/rajshahi.spec.js',
    mymensingh: './Tests/mymensingh.spec.js'

  },

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};
