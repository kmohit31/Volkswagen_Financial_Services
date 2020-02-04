const { Given } = require('cucumber');
const openWebSite = require('../support/action/openWebsite');

    Given(
        /^I launch the "([^"]*)" website$/, 
        openWebSite
    );
    Given(
        /^I Open the "([^"]*)" website$/, 
        openWebSite

        //website logic,pull
    );