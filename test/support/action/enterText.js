var testData = require("../testData/TestData");
var Page = require("./../../objects/AllPageObjects");

module.exports = async (input,element) =>{

    console.log(Page.allPageWeb[element]);
    console.log(input);

    const ele = $(Page.allPageWeb[element]);
    ele.waitForExist(4000);
    ele.setValue(testData[input]);
}