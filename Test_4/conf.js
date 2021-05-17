// An example configuration file.
exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

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
  suites:{
    utils: './Tests/utils.spec.js',
    more_from_bikroy : './Tests/more_from_bikroy.spec.js',
    help_support : './Tests/help_support.spec.js',
    follow_bikroy: './Tests/follow_bikroy.spec.js',
    about_bikroy: './Tests/about_bikroy.spec.js'
  },
    

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};
