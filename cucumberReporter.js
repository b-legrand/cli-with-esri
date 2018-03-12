var reporter = require('cucumber-html-reporter');

const pkg = require('./package.json');
/** 
 * Options de 'cucumber-html-reporter'.
*/
const options = {
        theme: 'bootstrap',
        jsonFile: 'dist/cucumber_report.json',
        output: 'dist/cucumber_report.html',
        reportSuiteAsScenarios: true,
        launchReport: true,
        metadata: {
            "App Version": pkg.version,
            "Test Environment": "STAGING",
            "Browser": "Chrome  54.0.2840.98",
            "Platform": "Windows 10",
            "Parallel": "Scenarios",
            "Executed": "Remote"
        },
        screenshotsDirectory: 'dist/screenshots/',
        storeScreenshots: true
    };
 
    reporter.generate(options);
    
 
    //more info on `metadata` is available in `options` section below.
 
    //to generate consodilated report from multi-cucumber JSON files, please use `jsonDir` option instead of `jsonFile`. More info is available in `options` section below.
 