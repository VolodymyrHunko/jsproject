# jsproject
<!-- VS CODE tutorial: -->
https://code.visualstudio.com/docs/typescript/typescript-tutorial
<!-- documentation for Cucumber with TS from npm -->
https://www.npmjs.com/package/@cucumber/cucumber
<!-- Sample project for JScript settings base on: -->
https://www.lambdatest.com/blog/automation-testing-with-selenium-javascript/
<!-- Sample project for Cucumber with JScript -->
https://www.lambdatest.com/blog/cucumberjs-tutorial-selenium/
<!-- Sample project for TypeScript Cucumber lerning: -->
https://qamind.com/blog/write-selenium-and-cucumber-framework-from-scratch/

<!-- Before all: create new repository in GitHub, add gitignore file to GitHub repo and clone this repo to local. Try to push some updated to be sure push/pull working. -->

<!-- Step 1: Initialize the project in this folder. Open the IDE terminal and navigate to the project location. Run the following commands: -->
node --version
npm --version
tsc --version
java --version
chromedriver --version  
<!-- See: all versions -->
npm init -y
<!-- See: package.json file has created  -->
npm install --save @cucumber/cucumber 
npm install --save selenium-webdriver 
npm install --save chromedriver
<!-- optional installations -->
npm install --save @types/bunyan
npm install --save @types/chai
npm install --save @types/ini
npm install --save @types/lodash
npm install --save @types/mocha
npm install --save@types/node
npm install --save @types/selenium-webdriver
npm install @typescript-eslint/eslint-plugin
<!-- Consider to install: assert , bunyan , logger, uuid, cucumber-console-formatter , eslint , gherkin-lint,  multiple-cucumber-html-reporter , prettier , chai , typescript , ts-node  to project level as npm install **** -->
<!-- See: packaje-lock.json file has created, node_modules folder has created, pacaje.json has updated -->

<!-- update package.json as: "test": "./node_modules/.bin/cucumber-js" -->

<!-- Crdate folder for TScestcases with sample file, open terminal there, run command -->
tsc --init
<!-- See: testconfig.json file created, update it : "outDir": "out",
    "sourceMap": true -->
tsc  <!-- to convert TS to Js from folder where is tscconfig.json-->


<!-- add configuration for run/debug (launch.json file should be created inside .vscode folder) referense vscode tutorial-->

To run/debug:
1) select Launch Program (if set up .vccode launch file) or -> 
2) to run a single file type in terminal: node file_name.js (cd to test_folder) or enter tsc (if tsconfig.json created) or ->
3) npm run test (if package.jason scripts/test setup) or ->
4) npx cucumber-js