const Page = require("./../../objects/AllPageObjects")

module.exports = async (element) =>{

        const ele = $(Page.allPageWeb[element]);
        ele.waitForExist(4000);
        ele.click();  
}