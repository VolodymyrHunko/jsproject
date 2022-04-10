# jsproject

Sample project for JScript learning:
settings base on https://www.lambdatest.com/blog/automation-testing-with-selenium-javascript/
Sample project for TypeScript Cucumber lerning:
https://qamind.com/blog/write-selenium-and-cucumber-framework-from-scratch/

<!-- Before all: create new repository in GitHub, add gitignore file to GitHub repo and clone this repo to local. Try to push some updated to be sure push/pull working. -->

<!-- Step 1: Initialize the project in this folder. Open the IDE terminal and navigate to the project location. Run the following commands: -->
node --version
npm --version
tsc --version
<!-- See: all versions -->
npm init -y
<!-- See: package.json file has created  -->
npm install --save selenium-webdriver chromedriver assert
<!-- bunyan logger cucumber-console-formatter eslint gherkin-lint multiple-cucumber-html-reporter prettier chai cucumber/cucumber typescript ts-node  -->
<!-- See: packaje-lock.json file has created, node_modules folder has created, pacaje.json has updated -->

<!-- Crdate folder for TScestcases with sample file, open terminal there, run command -->
tsc --init
<!-- See: testconfig.json file created, update it as here... -->

<!-- add configuration for run/debug (launch.json file should be created inside .vscode folder) referense vscode tutorial-->

To run/debug select Launch Program or type in terminal: node test.js (cd to test_folder) or enter tsc if tsconfig.json created