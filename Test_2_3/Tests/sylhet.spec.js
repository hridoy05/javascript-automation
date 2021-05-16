let SylhetPage = require("../Pages/SylhetPage")
describe("test sylhet page of birkroy.com",()=> {
    beforeEach(async() => {
        browser.ignoreSynchronization = true
        await browser.get("https://bikroy.com/en/ads/sylhet")
    });
    it('find lowest value', async() => {
        let sylhetPage = new SylhetPage()
        await sylhetPage.find_lowest_value()     
    });
    it('click on loweat value', async() => {
        let sylhetPage = new SylhetPage()
        await sylhetPage.click_on_lowest_value()
        
    });
    it('find date text', async() => {
        let sylhetPage = new SylhetPage()
        ele = await sylhetPage.get_date_text()
        expect(ele).toBeDefined()
        
    });
    it('find element text', async() => {
        let sylhetPage = new SylhetPage()
        text = await sylhetPage.get_element_text()
        expect(text).toBe('Description')
        
    });
    it('click number button', async() => {
        let sylhetPage = new SylhetPage()
        await sylhetPage.click_number()
        
    });
    it('valid_phone_number', async() => {
        let sylhetPage = new SylhetPage()
        let numbers = await sylhetPage.valid_phone_number()
        
        numbers.map(number => {
            let pt= /^(?:\+88|88)?(01[3-9]\d{8})$/
            expect(pt.test(number)).toBe(true)
        })
        
    });
})