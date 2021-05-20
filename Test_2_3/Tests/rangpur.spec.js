const RangpurPage = require("../Pages/RangpurPage")
const testData = require('../TestData/testdata.json')
describe("test Rangpur page of birkroy.com",()=> {
    beforeEach(async() => {
        browser.ignoreSynchronization = true
        await browser.get("https://bikroy.com/en/ads/rangpur")
    });
    it('find lowest value', async() => {
        let rangpurPage = new RangpurPage()
        await rangpurPage.do_find_lowest_value(testData.locator.lowest_add_value)   
    });
    it('click on loweat value', async() => {
        let rangpurPage = new RangpurPage()
        await rangpurPage.do_find_lowest_value(testData.locator.lowest_add_value)
        await rangpurPage.do_click_lowest_value(testData.locator.lowest_add_value)
        
    });
    it('find date text', async() => {
        let rangpurPage = new RangpurPage()
        await rangpurPage.do_find_lowest_value(testData.locator.lowest_add_value)
        await rangpurPage.do_click_lowest_value(testData.locator.lowest_add_value)
        ele = await rangpurPage.find_date_text(testData.locator.date_text)
        expect(ele).toBeDefined()
        
    });
    it('find element text', async() => {
        let rangpurPage = new RangpurPage()
        await rangpurPage.do_find_lowest_value(testData.locator.lowest_add_value)
        await rangpurPage.do_click_lowest_value(testData.locator.lowest_add_value)
        text = await rangpurPage.find_element_text(testData.locator.element_text)
        expect(text).toBe('Description')
        
    });
    it('click number button', async() => {
        let rangpurPage = new RangpurPage()
        await rangpurPage.do_find_lowest_value(testData.locator.lowest_add_value)
        await rangpurPage.do_click_lowest_value(testData.locator.lowest_add_value)
        await rangpurPage.do_click_number_button(testData.locator.number_button)
        
    });
    it('valid_phone_number', async() => {
        let rangpurPage = new RangpurPage()
        await rangpurPage.do_find_lowest_value(testData.locator.lowest_add_value)
        await rangpurPage.do_click_lowest_value(testData.locator.lowest_add_value)
        await rangpurPage.do_click_number_button(testData.locator.number_button) 
        let numbers = await rangpurPage.do_valid_phone_number(testData.locator.valid_number)
        
        numbers.map(number => {
            let pt= /^(?:\+88|88)?(01[3-9]\d{8})$/
            expect(pt.test(number)).toBe(true)
        })
        
    });
})