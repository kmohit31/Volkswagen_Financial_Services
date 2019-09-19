const isDisplayed = require('../support/action/isDisplayed');

const { Then } = require('cucumber');

Then(
        /^I should see "([^"]*)"$/,
       isDisplayed
    );