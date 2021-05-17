let basePage = require('./BasePage')
module.exports = class Follow_Support{
    constructor() {
        //declare dom properties for finding web elements
        this.blog = "Blog" //linkText
        this.facebook = "Facebook"//linktext
        this.twitter = "Twitter"//linktext
        this.youtube = "Youtube"//linkText
        
    }
    //sending parameter for calling locator from baseclass (by.linkText)
    async test_Blog_link(){
        await basePage.open_link(this.blog)
    }
    //sending parameter for calling locator from baseclass (by.linkText)
    async test_facebook_link(){
        await basePage.open_link(this.facebook)
    }
    //sending parameter for calling locator from baseclass (by.linkText)
    async test_twitter_link(){
        await basePage.open_link(this.twitter)
    }
    //sending parameter for calling locator from baseclass (by.linkText)
    async test_youtube_link(){
        await basePage.open_link(this.youtube)
    }
        
}