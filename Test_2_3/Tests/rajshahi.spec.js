let RajshahiPage = require("../Pages/RajshahiPage")
describe("test Rajshahi page of birkroy.com",()=> {
    beforeEach(async() => {
        browser.ignoreSynchronization = true
        await browser.get("https://bikroy.com/en/ads/rajshahi")
    });
    it('find lowest value', async() => {
        let rajshahiPage = new RajshahiPage()
        await rajshahiPage.find_lowest_value()     
    });
    it('click on loweat value', async() => {
        let rajshahiPage = new RajshahiPage()
        await rajshahiPage.click_on_lowest_value()
        
    });
    it('find date text', async() => {
        let rajshahiPage = new RajshahiPage()
        ele = await rajshahiPage.get_date_text()
        expect(ele).toBeDefined()
        
    });
    it('find element text', async() => {
        let rajshahiPage = new RajshahiPage()
        text = await rajshahiPage.get_element_text()
        expect(text).toBe('Description')
        
    });
    it('click number button', async() => {
        let rajshahiPage = new RajshahiPage()
        await rajshahiPage.click_number()
        
    });
    it('valid_phone_number', async() => {
        let rajshahiPage = new RajshahiPage()
        let numbers = await rajshahiPage.valid_phone_number()
        
        numbers.map(number => {
            let pt= /^(?:\+88|88)?(01[3-9]\d{8})$/
            expect(pt.test(number)).toBe(true)
        })
        
    });
})