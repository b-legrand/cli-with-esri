import * as tslintHtmlReport from 'tslint-html-report';

tslintHtmlReport({
  tslint: './tslint.json', // path to tslint.json
  srcFiles: 'src/**/*.ts', // files to lint
  outDir: 'dist/tslint', // output folder to write the report to
  html: 'tslint-report.html', // name of the html report generated
  exclude: ['src/**/*.ts'], // Files/patterns to exclude
  breakOnError: false, // Should it throw an error in tslint errors are found
  typeCheck: true, // enable type checking. requires tsconfig.json
  tsconfig: 'src/tsconfig.app.json' // path to tsconfig.json
});
