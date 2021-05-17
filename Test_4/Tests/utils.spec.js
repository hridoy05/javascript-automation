describe('More from brikroy', () => {
    beforeEach(async()=>{
        browser.ignoreSynchronization = true
        await browser.get('https://bikroy.com/en')
    })
    it('scroll down', async() => {
        await browser.executeScript("window.scrollTo(0,document.body.scrollHeight)")
        browser.sleep(2000)
      });
    it('assert text', async() => {       
        text = await element(by.className('copyright')).getText()
        expect(text).toBe('Copyright © Saltside Technologies')
        
    });
});