let Follow_Support = require('../pages/Follow_Bikroy')

describe('help and support', () => {
    beforeEach(async()=>{
        browser.ignoreSynchronization = true
        await browser.get("https://bikroy.com/en/ads")
    })
    it('blog link test', async() => {
        let follow_support = new Follow_Support()
        await follow_support.test_Blog_link()
        
    });
    it('facebook link test', async() => {
        let follow_support = new Follow_Support()
        await follow_support.test_facebook_link()
        
    });
    it('twittter link test', async() => {
        let follow_support = new Follow_Support()
        await follow_support.test_twitter_link()
        
    });
    it('youtube link test', async() => {
        let follow_support = new Follow_Support()
        await follow_support.test_youtube_link()
        
    });
    
    
    
});