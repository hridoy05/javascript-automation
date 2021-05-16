let RangpurPage = require("../Pages/RangpurPage")
describe("test rangpur page of birkroy.com",()=> {
    beforeEach(async() => {
        browser.ignoreSynchronization = true
        await browser.get("https://bikroy.com/en/ads/rangpur")
    });
    it('find lowest value', async() => {
        let rangpurPage = new RangpurPage()
        await rangpurPage.find_lowest_value()     
    });
    it('click on loweat value', async() => {
        let rangpurPage = new RangpurPage()
        await rangpurPage.click_on_lowest_value()
        
    });
    it('find date text', async() => {
        let rangpurPage = new RangpurPage()
        ele = await rangpurPage.get_date_text()
        expect(ele).toBeDefined()
        
    });
    it('find element text', async() => {
        let rangpurPage = new RangpurPage()
        text = await rangpurPage.get_element_text()
        expect(text).toBe('Description')
        
    });
    it('click number button', async() => {
        let rangpurPage = new RangpurPage()
        await rangpurPage.click_number()
        
    });
    it('valid_phone_number', async() => {
        let rangpurPage = new RangpurPage()
        let numbers = await rangpurPage.valid_phone_number()
        
        numbers.map(number => {
            let pt= /^(?:\+88|88)?(01[3-9]\d{8})$/
            expect(pt.test(number)).toBe(true)
        })
        
    });
})