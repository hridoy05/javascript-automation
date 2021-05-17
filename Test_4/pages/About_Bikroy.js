let basePage = require('./BasePage')
module.exports = class About_Bikroy{
    constructor() {
        //declare dom properties for finding web elements
        this.about = "About Us", //linktext
        this.careers = "Careers", //linkText
        this.terms = "Terms and Conditions" //linkText
        this.privacy = "Privacy policy", //linkteText
        this.sitemap = "Sitemap" //linkText
    }
    //sending parameter for calling locator from baseclass (by.linkText)
    async test_about_link(){
        await basePage.open_link(this.about)

    }
    //sending parameter for calling locator from baseclass (by.linkText)
    async test_careers_link(){
        await basePage.open_link(this.careers)

    }
    //sending parameter for calling locator from baseclass (by.linkText)
    async test_terms_link(){
        await basePage.open_link(this.terms)

    }
    //sending parameter for calling locator from baseclass (by.linkText)
    async test_privacy_link(){
        await basePage.open_link(this.privacy)

    }
    //sending parameter for calling locator from baseclass (by.linkText)
    async test_sitemap_link(){
        await basePage.open_link(this.sitemap)

    }
}
    
