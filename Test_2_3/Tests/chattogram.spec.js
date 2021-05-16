let ChattogramPage = require("../Pages/ChattogramPage")
describe("test chattogram page of birkroy.com",()=> {
    beforeEach(async() => {
        browser.ignoreSynchronization = true
        await browser.get("https://bikroy.com/en/ads/chattogram")
    });
    it('find lowest value', async() => {
        let chattogramPage = new ChattogramPage()
        await chattogramPage.find_lowest_value()     
    });
    it('click on loweat value', async() => {
        let chattogramPage = new ChattogramPage()
        await chattogramPage.click_on_lowest_value()
        
    });
    it('find date text', async() => {
        let chattogramPage = new ChattogramPage()
        ele = await chattogramPage.get_date_text()
        expect(ele).toBeDefined()
        
    });
    it('find element text', async() => {
        let chattogramPage = new ChattogramPage()
        text = await chattogramPage.get_element_text()
        expect(text).toBe('Description')
        
    });
    it('click number button', async() => {
        let chattogramPage = new ChattogramPage()
        await chattogramPage.click_number()
        
    });
    it('valid_phone_number', async() => {
        let chattogramPage = new ChattogramPage()
        let numbers = await chattogramPage.valid_phone_number()
        
        numbers.map(number => {
            let pt= /^(?:\+88|88)?(01[3-9]\d{8})$/
            expect(pt.test(number)).toBe(true)
        })
        
    });
})