let BarishalPage = require("../Pages/BarishalPage")
describe("test Barishal page of birkroy.com",()=> {
    beforeEach(async() => {
        browser.ignoreSynchronization = true
        await browser.get("https://bikroy.com/en/ads/barishal")
    });
    it('find lowest value', async() => {
        let barishalPage = new BarishalPage()
        await barishalPage.find_lowest_value()     
    });
    it('click on loweat value', async() => {
        let barishalPage = new BarishalPage()
        await barishalPage.click_on_lowest_value()
        
    });
    it('find date text', async() => {
        let barishalPage = new BarishalPage()
        ele = await barishalPage.get_date_text()
        expect(ele).toBeDefined()
        
    });
    it('find element text', async() => {
        let barishalPage = new BarishalPage()
        text = await barishalPage.get_element_text()
        expect(text).toBe('Description')
        
    });
    it('click number button', async() => {
        let barishalPage = new BarishalPage()
        await barishalPage.click_number()
        
    });
    it('valid_phone_number', async() => {
        let barishalPage = new BarishalPage()
        let numbers = await barishalPage.valid_phone_number()
        
        numbers.map(number => {
            let pt= /^(?:\+88|88)?(01[3-9]\d{8})$/
            expect(pt.test(number)).toBe(true)
        })
        
    });
})