const web = {
    
    WebPageTitle: "//img[@title='Volkswagen Financial Services']",
    FeatureHeaderTitle: "//*[@id='dlg-dealersearch-title']",
    //FeatureHeaderTitle: '~dlg-dealersearch-title',
    VehicleRegistrationSubtitle: "//*[@id='dlg-dealersearch-subtitle']",
    Registration: "//*[@id='vehicleReg']",
    Findvehicle: "#search",
    FindvehicleButton: "#search",
    RecordNotFoundResult : "//*[@id='page-container']/div[4]",
    ErrorMessage: "//*[@id='page-container']/div[3]/form/div",
    Result: "div.result",
    CoverStart: "(//span[@class='resultDate'])[1]",
    CoverEnd: "(//span[@class='resultDate'])[2]"

}
module.exports = {
    web
}