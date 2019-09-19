const enterText = require('../support/action/enterText');
const clickButton = require('../support/action/clickButton');
const clearField = require('../support/action/clearField');

const { When } = require('cucumber');

When(
        /^I enter "([^"]*)?" in "([^"]*)?" textfield$/, 
       enterText
    );

When(
    /^I click on "([^"]*)?" button$/,
    clickButton
);
When(
    /^I clear the "([^"]*)?" textfield$/,
    clearField
)