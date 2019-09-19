const Page = require('../../objects/AllPageObjects');

module.exports = async (element) =>{

   console.log(Page.allPageWeb[element]);
   //const ele = browser.$(Page.allPageWeb[element]);
   const ele = $(Page.allPageWeb[element]);  
   ele.waitForDisplayed(element);

};