let About_Bikroy = require('../pages/About_Bikroy')

describe('About Bikroy', () => {
    beforeEach(async()=>{
        browser.ignoreSynchronization = true
        await browser.get("https://bikroy.com/en/ads")
    })
    it('about link test', async() => {
        let about_bikroy = new About_Bikroy()
        await about_bikroy.test_about_link()
    });
   
    it('about careers link test', async() => {
        let about_bikroy = new About_Bikroy()
        await about_bikroy.test_careers_link()
    });
    it('about terms link test', async() => {
        let about_bikroy = new About_Bikroy()
        await about_bikroy.test_terms_link()
    });
    it('about privacy link test', async() => {
        let about_bikroy = new About_Bikroy()
        await about_bikroy.test_privacy_link()
    });
    it('about sitemap link test', async() => {
        let about_bikroy = new About_Bikroy()
        await about_bikroy.test_sitemap_link()
    });
    
    
});