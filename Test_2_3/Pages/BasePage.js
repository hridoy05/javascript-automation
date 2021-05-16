class BasePage{
    async do_find_lowest_value (locator){
        return await element.all(by.className(locator)).last()       
    }
    
    async do_click_lowest_value(locator){
        return await element.all(by.className(locator)).last().click()
    }
    async find_date_text(locator){
        return await element(by.className(locator)).getText()
    }
    async find_element_text(locator){
        return await element(by.className(locator)).getText()
    }
    async do_click_number_button(locator){
        return await element(by.className(locator))
    }
    async do_valid_phone_number(locator)
    {
        return await element.all(by.css(locator)).map(ele => ele.getText())
    }
}
module.exports = new BasePage