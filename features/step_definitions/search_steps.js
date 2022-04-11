

const assert = require('assert');
const { Given, When, Then, AfterAll } = require('@cucumber/cucumber');
const { Builder, By, Key } = require('selenium-webdriver');

const driver = new Builder().forBrowser('chrome').build();


  Given('I am on the Google homepage', {timeout:10000}, async function () {
    await driver.get('https://www.google.com/');
  });


  When('I search for {string}',  async function (string) {
    const element = await driver.findElement(By.name('q'));
    element.sendKeys(string, Key.RETURN);
    await driver.sleep(1000);
  });


  Then('the page title is {string}',  async function (string) {
    var title = await driver.getTitle();
    console.log('Title is:',title);
    assert.equal(title, string);
  });


AfterAll(async function () {
    await driver.quit();
  });