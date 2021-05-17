let basePage = require('./BasePage')
module.exports = class Help_Support{
    constructor(params) {
        //declare dom properties for finding web elements
        this.faq = "FAQ"//linkText
        this.stay_safe = "Stay safe"//linkText
        this.contact = "Contact Us"//linkText
    }
    //sending parameter for calling locator from baseclass (by.linkText)
    async test_faq_link(){
        await basePage.open_link(this.faq)
    }
    //sending parameter for calling locator from baseclass (by.linkText)
       
    async test_stay_link(){
        await basePage.open_link(this.stay_safe)
    }
    //sending parameter for calling locator from baseclass (by.linkText)
    async test_contact_link(){
        await basePage.open_link(this.contact)
    }
        
}