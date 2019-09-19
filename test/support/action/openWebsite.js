const testData = require('../testData/TestData.js');

module.exports = async (input) =>{
    
    const url = testData[input];
    browser.url(url);

};