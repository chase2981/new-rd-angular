module.exports = function(config) {
  config.set({
    basePath: require('path').join(__dirname, '../'),
    frameworks: ['jasmine'],

    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-phantomjs-launcher')
    ],

    // Proxied base paths for loading assets
    proxies: {
      // required for modules fetched by SystemJS
      '/base/node_modules/': './node_modules/'
    },

    files: [
      {pattern: 'node_modules/core-js/client/core.js', included: true, watched: false},
      //{pattern: 'node_modules/es6-shim/es6-shim.js', included: true, watched: false},
      {pattern: 'node_modules/systemjs/dist/system-polyfills.js', included: true, watched: false},
      {pattern: 'node_modules/systemjs/dist/system.src.js', included: true, watched: false},
      {pattern: 'node_modules/zone.js/dist/zone.js', included: true, watched: false},
      {pattern: 'node_modules/zone.js/dist/proxy.js', included: true, watched: false},
      {pattern: 'node_modules/zone.js/dist/sync-test.js', included: true, watched: false},
      {pattern: 'node_modules/zone.js/dist/jasmine-patch.js', included: true, watched: false},
      {pattern: 'node_modules/zone.js/dist/async-test.js', included: true, watched: false},
      {pattern: 'node_modules/zone.js/dist/fake-async-test.js', included: true, watched: false},

      // Include all Angular dependencies
      {pattern: 'node_modules/@angular/**/*', included: false, watched: false},
      {pattern: 'node_modules/rxjs/**/*', included: false, watched: false},

      // 'build/systemjs.config.js',
      'angular-lib/dist/browser-test-shim.js',

      //'build/**/*.+(js|js.map|css|html)',

      // Includes all package tests and source files into karma. Those files will be watched.
      // This pattern also matches all all sourcemap files and TypeScript files for debugging.
      {pattern: 'angular-lib/build/**/*', included: false, watched: true},
      {pattern: 'angular-lib/dist/**', included: false, watched: true}
    ],

    reporters: ['progress', 'kjhtml'],

    customLaunchers: {
      "Chrome_1024x768": {
        "base": "Chrome",
        "flags": [
          "--window-size=1024,768"
        ]
      }
    },

    exclude: [],
    preprocessors: {},
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'], /* Chrome_1024x768 */
    singleRun: false
  });
};
