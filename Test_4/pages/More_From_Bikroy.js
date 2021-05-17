let basePage = require('./BasePage')

module.exports = class More_From_Bikroy{

    constructor() {
        //declare dom properties for finding web elements
        this.sell_first = "Sell Fast" //linkText
        this.doorstep ="Doorstep Delivery" //linktext
        this.membership = "Membership" //linktext
        this.banner = "Banner Ads" //linkText
    }
    //sending parameter for calling locator from baseclass (by.linkText)
    async test_sell_first_link(){
        await basePage.open_link(this.sell_first)
    }
    //sending parameter for calling locator from baseclass (by.linkText)
    async test_doorstep_link(){
        await basePage.open_link(this.test_doorstep_link)
    }
    //sending parameter for calling locator from baseclass (by.linkText)
    async test_membership_link(){
        await basePage.open_link(this.membership)
    }
    //sending parameter for calling locator from baseclass (by.linkText)
    async test_banner_link(){
        await basePage.open_link(this.banner)
    }

}