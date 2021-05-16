let MymensinghPage = require("../Pages/MymensinghPage")
describe("test mymensingh page of birkroy.com",()=> {
    beforeEach(async() => {
        browser.ignoreSynchronization = true
        await browser.get("https://bikroy.com/en/ads/mymensingh")
    });
    it('find lowest value', async() => {
        let mymensinghPage = new  MymensinghPage()
        await mymensinghPage.find_lowest_value()     
    });
    it('click on loweat value', async() => {
        let mymensinghPage = new  MymensinghPage()
        await mymensinghPage.click_on_lowest_value()
        
    });
    it('find date text', async() => {
        let mymensinghPage = new  MymensinghPage()
        ele = await mymensinghPage.get_date_text()
        expect(ele).toBeDefined()
        
    });
    it('find element text', async() => {
        let mymensinghPage = new  MymensinghPage()
        text = await mymensinghPage.get_element_text()
        expect(text).toBe('Description')
        
    });
    it('click number button', async() => {
        let mymensinghPage = new  MymensinghPage()
        await mymensinghPage.click_number()
        
    });
    it('valid_phone_number', async() => {
        let mymensinghPage = new  MymensinghPage()
        let numbers = await mymensinghPage.valid_phone_number()
        
        numbers.map(number => {
            let pt= /^(?:\+88|88)?(01[3-9]\d{8})$/
            expect(pt.test(number)).toBe(true)
        })
        
    });
})