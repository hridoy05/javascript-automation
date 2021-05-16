let KhulnaPage = require("../Pages/KhulnaPage")
describe("test khulna page of birkroy.com",()=> {
    beforeEach(async() => {
        browser.ignoreSynchronization = true
        await browser.get("https://bikroy.com/en/ads/khulna")
    });
    it('find lowest value', async() => {
        let khulnaPage = new KhulnaPage()
        await khulnaPage.find_lowest_value()     
    });
    it('click on loweat value', async() => {
        let khulnaPage = new KhulnaPage()
        await khulnaPage.click_on_lowest_value()
        
    });
    it('find date text', async() => {
        let khulnaPage = new KhulnaPage()
        ele = await khulnaPage.get_date_text()
        expect(ele).toBeDefined()
        
    });
    it('find element text', async() => {
        let khulnaPage = new KhulnaPage()
        text = await khulnaPage.get_element_text()
        expect(text).toBe('Description')
        
    });
    it('click number button', async() => {
        let khulnaPage = new KhulnaPage()
        await khulnaPage.click_number()
        
    });
    it('valid_phone_number', async() => {
        let khulnaPage = new KhulnaPage()
        let numbers = await khulnaPage.valid_phone_number()
        
        numbers.map(number => {
            let pt= /^(?:\+88|88)?(01[3-9]\d{8})$/
            expect(pt.test(number)).toBe(true)
        })
        
    });
})