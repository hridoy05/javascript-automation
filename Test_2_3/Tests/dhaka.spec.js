let DhakaPage = require("../Pages/DhakaPage")
describe("test dhaka page of birkroy.com",()=> {
    beforeEach(async() => {
        browser.ignoreSynchronization = true
        await browser.get("https://bikroy.com/en/ads/dhaka")
    });
    it('find lowest value', async() => {
        let dhakaPage = new DhakaPage()
        await dhakaPage.find_lowest_value()     
    });
    it('click on loweat value', async() => {
        let dhakaPage = new DhakaPage()
        await dhakaPage.click_on_lowest_value()
        
    });
    it('find date text', async() => {
        let dhakaPage = new DhakaPage()
        ele = await dhakaPage.get_date_text()
        expect(ele).toBeDefined()
        
    });
    it('find element text', async() => {
        let dhakaPage = new DhakaPage()
        text = await dhakaPage.get_element_text()
        expect(text).toBe('Description')
        
    });
    it('click number button', async() => {
        let dhakaPage = new DhakaPage()
        await dhakaPage.click_number()
        
    });
    it('valid_phone_number', async() => {
        let dhakaPage = new DhakaPage()
        let numbers = await dhakaPage.valid_phone_number()
        
        numbers.map(number => {
            let pt= /^(?:\+88|88)?(01[3-9]\d{8})$/
            expect(pt.test(number)).toBe(true)
        })
        
    });
})