exports.config = {

  allScriptsTimeout: 11000,

  specs: [
    '*.js'
  ],

  baseUrl: 'http://localhost:8000/',

  framework: 'jasmine',
  seleniumAddress: 'http://localhost:5555/',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }

};