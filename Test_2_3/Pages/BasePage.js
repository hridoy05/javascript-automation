class BasePage{

    //set locator for find lowest value

    async do_find_lowest_value (locator){
        return await element.all(by.className(locator)).last()       
    }  
    
    //set locator for click on lowest value
    async do_click_lowest_value(locator){
        return await element.all(by.className(locator)).last().click()
    }
    //set locator for find date text and actions
    async find_date_text(locator){
        return await element(by.className(locator)).getText()
    }

    //fset locator for ind element text and actions
    async find_element_text(locator){
        return await element(by.className(locator)).getText()
    }
    //set locator for click on number button 

    async do_click_number_button(locator){
        return await element(by.className(locator))
    }
    //set locator for validation phone number and valid array of phone numbers 
    async do_valid_phone_number(locator)
    {
        return await element.all(by.css(locator)).map(ele => ele.getText())
    }
}
module.exports = new BasePage