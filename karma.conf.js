// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function(config) {
  config.set({
    basePath: "",
    frameworks: ["jasmine", "@angular-devkit/build-angular"],
    plugins: [
      require("karma-jasmine"),
      require("karma-chrome-launcher"),
      require("karma-jasmine-html-reporter"),
      require("karma-coverage-istanbul-reporter"),
      require("@angular-devkit/build-angular/plugins/karma")
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      dir: require("path").join(__dirname, "coverage"),
      reports: ["html", "lcovonly", "json", "text-summary"],
      dir: "./coverage", // base output directory
      "report-config": {
        html: {
          // any options here are valid:
          // https://github.com/istanbuljs/istanbul-reports/blob/master/lib/html/index.js#L134-L139
          subdir: "../reports/html"
        },
        lcovonly: {
          // options from here are valid:
          // https://github.com/istanbuljs/istanbul-reports/blob/master/lib/lcovonly/index.js#L7-L10
          file: "coverage.lcov"
        }
      },
      fixWebpackSourcePaths: true
    },
    // the default configuration
    htmlReporter: {
      outputDir: "dist/", // where to put the reports
      templatePath: null, // set if you moved jasmine_template.html
      focusOnFailures: true, // reports show failures on start
      namedFiles: false, // name files instead of creating sub-directories
      pageTitle: null, // page title for reports; browser info by default
      urlFriendlyName: false, // simply replaces spaces with _ for files/dirs
      reportName: "report-summary-filename", // report summary filename; browser info by default

      // experimental
      preserveDescribeNesting: false, // folded suites stay folded
      foldAll: false // reports start folded (only with preserveDescribeNesting)
    },
    customLaunchers: {
      IE9: {
        base: "IE",
        "x-ua-compatible": "IE=EmulateIE9"
      },
      IE8: {
        base: "IE",
        "x-ua-compatible": "IE=EmulateIE8"
      },
      Chromium_CI: {
        base: "Chromium",
        flags: ["--no-sandbox", "--headless", "--disable-gpu"]
      }
    },
    angularCli: {
      environment: "dev"
    },
    reporters: ["progress", "kjhtml"],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ["Chrome"],
    singleRun: false
  });
};
