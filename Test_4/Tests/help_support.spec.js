let Help_Support = require('../pages/Help_Support')
describe('help and support', () => {
    beforeEach(async()=>{
        browser.ignoreSynchronization = true
        await browser.get("https://bikroy.com/en/ads")
    })
    it('faq', async() => {
        let help_support = new Help_Support()
        await help_support.test_faq_link()
    });
    it('faq', async() => {
        let help_support = new Help_Support()
        await help_support.test_faq_link()
    });
    it('stay safe', async() => {
        let help_support = new Help_Support()
        await help_support.test_stay_link()
    });
    it('contact', async() => {
        let help_support = new Help_Support()
        await help_support.test_contact_link()
    });
    
    
});