let More_From_Bikroy = require('../pages/More_From_Bikroy')
describe('More from brikroy', () => {
    beforeEach(async()=>{
        browser.ignoreSynchronization = true
        await browser.get("https://bikroy.com/en/ads")
    })
    it('scroll down', async() => {
        await browser.executeScript("window.scrollTo(0,document.body.scrollHeight)")
        browser.sleep(2000)
      });
    it('assert text', async() => {
        browser.ignoreSynchronization = true
        await browser.get('https://bikroy.com/en')
        text = await element(by.className('copyright')).getText()
        expect(text).toBe('Copyright © Saltside Technologies')
        
    });
    
    it('test_sell_first_link',async () => {
        let more_form_bikroy = new More_From_Bikroy()
        await more_form_bikroy.test_sell_first_link()
        browser.driver.sleep(3)
    });
});