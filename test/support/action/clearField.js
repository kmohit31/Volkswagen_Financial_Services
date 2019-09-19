const Page = require("../../objects/AllPageObjects")

module.exports = async (element) =>{
console.log(element);
        browser.pause(5000)
        const ele = $(Page.allPageWeb[element]);
        ele.waitForExist(4000);
        ele.clearValue();
}